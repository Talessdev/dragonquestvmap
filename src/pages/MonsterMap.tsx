import { useEffect, useMemo, useState } from "react";
import worldMap from "@/assets/world-map.png";
import {
  MAP_LOCATIONS,
  MONSTERS,
  TYPE_COLORS,
  buildIndex,
  type LocationType,
  type Monster,
  type MapLocation,
} from "@/data/monsters";
import { MonsterIcon } from "@/components/MonsterIcon";
import { STRINGS, LANG_LABELS, detectInitialLang, type Lang, type Strings } from "@/i18n";

type Tab = "map" | "all";
type Selection =
  | { kind: "map"; id: string }
  | { kind: "region"; id: string };

const SOURCE_URLS = {
  bestiary: "https://gamefaqs.gamespot.com/ds/942423-dragon-quest-v-hand-of-the-heavenly-bride/faqs/55921",
  sprites: "https://dragon-quest.org/wiki/Dragon_Quest_V",
};

const OUT_OF_MAP_REGIONS: Array<{ id: string; emoji: string }> = [
  { id: "central_overworld", emoji: "✺" },
  { id: "sea", emoji: "≈" },
  { id: "faerie", emoji: "✿" },
  { id: "ice", emoji: "❄" },
  { id: "nadiria", emoji: "♆" },
  { id: "estark", emoji: "☠" },
  { id: "pontoon", emoji: "⚓" },
];

function rateBadgeColor(rate: string | null) {
  if (!rate) return "#94a3b8";
  const m = rate.match(/(\d+)\s*\/\s*(\d+)/);
  if (!m) return "#94a3b8";
  const denom = parseInt(m[2]);
  if (denom <= 4) return "#34d399";
  if (denom <= 16) return "#a3e635";
  if (denom <= 64) return "#fbbf24";
  if (denom <= 256) return "#fb923c";
  return "#f87171";
}

function MonsterCard({ m, t }: { m: Monster; t: Strings }) {
  const recruitColor = rateBadgeColor(m.recruitRate);
  const dropColor = rateBadgeColor(m.dropRate);
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex gap-3.5 hover:bg-white/[0.06] hover:border-white/20 transition">
      <MonsterIcon name={m.name} image={m.image} size={64} />
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-amber-100 truncate">
          #{m.id} {m.name}
        </h3>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {m.recruitRate ? (
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1"
              style={{
                background: `${recruitColor}1f`,
                color: recruitColor,
                border: `1px solid ${recruitColor}55`,
              }}
            >
              {t.recruitPrefix} {m.recruitRate}
            </span>
          ) : (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-slate-500/15 text-slate-400 border border-slate-500/40">
              {t.notRecruitable}
            </span>
          )}
          {m.drop && (
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1"
              style={{
                background: `${dropColor}1f`,
                color: dropColor,
                border: `1px solid ${dropColor}55`,
              }}
            >
              ⛁ {m.drop} {m.dropRate ? `· ${m.dropRate}` : `· ${t.rateVaries}`}
            </span>
          )}
        </div>

        <div className="mt-2 text-[11px] text-slate-400 leading-snug">
          {m.locations.slice(0, 3).map((l, i) => (
            <div key={i} className="flex items-start gap-1">
              <span className="text-emerald-400 mt-0.5">▸</span>
              <span>{l}</span>
            </div>
          ))}
          {m.locations.length > 3 && (
            <div className="text-slate-500 italic">{t.otherLocations(m.locations.length - 3)}</div>
          )}
        </div>

        <div className="mt-1.5 text-[11px] text-slate-500 flex gap-3 font-mono">
          {m.exp && <span>{t.expLabel} <span className="text-slate-200">{m.exp}</span></span>}
          {m.gold && <span>{t.goldLabel} <span className="text-amber-300">{m.gold}G</span></span>}
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  title,
  description,
  monsters,
  onClose,
  t,
}: {
  title: string;
  description: string;
  monsters: Monster[];
  onClose: () => void;
  t: Strings;
}) {
  return (
    <aside className="w-full lg:w-[440px] shrink-0 bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl flex flex-col overflow-hidden lg:max-h-[calc(100vh-180px)] lg:sticky lg:top-[160px]">
      <div className="p-4 border-b border-white/10 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-amber-100 truncate">{title}</h2>
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white text-2xl leading-none shrink-0"
          aria-label={t.closeAria}
        >
          ×
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {monsters.length === 0 ? (
          <div className="text-sm text-slate-400 py-8 text-center">{t.empty}</div>
        ) : (
          monsters.map((m) => <MonsterCard key={`${m.id}-${m.name}`} m={m} t={t} />)
        )}
      </div>
      <div className="px-4 py-2 border-t border-white/10 text-[11px] text-slate-500">
        {monsters.length} {monsters.length === 1 ? t.countOne : t.countMany} · {t.sidebarFooter}
      </div>
    </aside>
  );
}

function Marker({
  loc,
  count,
  active,
  showName,
  onClick,
}: {
  loc: MapLocation;
  count: number;
  active: boolean;
  showName: boolean;
  onClick: () => void;
}) {
  const color = TYPE_COLORS[loc.type];
  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 hover:z-20"
      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
    >
      {showName && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 whitespace-nowrap text-[10px] font-semibold text-white bg-slate-900/90 px-1.5 py-0.5 rounded border border-white/10 pointer-events-none">
          {loc.name}
        </div>
      )}
      <div
        className="relative rounded-full flex items-center justify-center text-[10px] font-bold text-slate-900 transition-all"
        style={{
          width: active ? 28 : 22,
          height: active ? 28 : 22,
          background: color,
          boxShadow: `0 0 0 2px rgba(15,23,42,.85), 0 0 ${active ? 18 : 6}px ${color}`,
        }}
      >
        {count}
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap text-[11px] text-white bg-slate-900/95 px-2 py-1 rounded border border-white/10 pointer-events-none shadow-lg">
        {loc.name} <span className="text-slate-400">· {count}</span>
      </div>
    </button>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const langs: Lang[] = ["pt", "en", "es"];
  return (
    <div className="inline-flex rounded-md border border-white/10 overflow-hidden">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-[11px] font-semibold transition ${
            lang === l
              ? "bg-amber-500/20 text-amber-200"
              : "bg-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
          }`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}

export default function MonsterMap() {
  const [lang, setLang] = useState<Lang>(() => detectInitialLang());
  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("dq5_lang", lang);
  }, [lang]);
  const t = STRINGS[lang];

  const [tab, setTab] = useState<Tab>("map");
  const [onlyRecruitable, setOnlyRecruitable] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState<Selection | null>(null);

  const filtered = useMemo(
    () => MONSTERS.filter((m) => !onlyRecruitable || m.recruitRate),
    [onlyRecruitable]
  );

  const { byMap, byRegion } = useMemo(() => buildIndex(filtered), [filtered]);

  const totalCount = MONSTERS.length;
  const recruitableCount = MONSTERS.filter((m) => m.recruitRate).length;

  const allFiltered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return filtered.filter((m) => {
      if (!term) return true;
      return (
        m.name.toLowerCase().includes(term) ||
        m.locations.some((l) => l.toLowerCase().includes(term)) ||
        (m.drop?.toLowerCase().includes(term) ?? false)
      );
    });
  }, [filtered, search]);

  const sidebar = useMemo(() => {
    if (!selection) return null;
    if (selection.kind === "map") {
      const loc = MAP_LOCATIONS.find((l) => l.id === selection.id);
      if (!loc) return null;
      return {
        title: loc.name,
        description: t.types[loc.type],
        monsters: byMap[loc.id] || [],
      };
    }
    const reg = t.regions[selection.id];
    if (!reg) return null;
    return {
      title: reg.name,
      description: reg.description,
      monsters: byRegion[selection.id] || [],
    };
  }, [selection, byMap, byRegion, t]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,#1e293b_0%,#020617_55%,#000_100%)] text-slate-100">
      <header className="border-b border-amber-500/10 bg-slate-950/70 backdrop-blur sticky top-0 z-30">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-amber-300">Dragon Quest V</span>
              <span className="text-slate-400 mx-2">—</span>
              <span className="text-amber-100/90">Hand of the Heavenly Bride</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <LangSwitcher lang={lang} setLang={setLang} />
            <a
              href={SOURCE_URLS.bestiary}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-200 hover:bg-amber-500/20 transition"
            >
              {t.sources.bestiary}
            </a>
                 <a
              href={SOURCE_URLS.sprites}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-200 hover:bg-amber-500/20 transition"
            >
              {t.sources.sprites}
            </a>
            <a
              href="https://github.com/Talessdev"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-200 hover:bg-amber-500/20 transition flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.94 10.94 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.71 21.4 24 17.1 24 12.02 24 5.74 18.77.5 12 .5z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/talesdev/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              aria-label="Instagram"
              className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-200 hover:bg-amber-500/20 transition flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-[1500px] mx-auto px-6 pb-3 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setTab("map")}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition ${
                tab === "map"
                  ? "bg-amber-500/20 text-amber-200 border border-amber-500/40"
                  : "text-slate-400 border border-transparent hover:text-slate-200"
              }`}
            >
              {t.tabMap}
            </button>
            <button
              onClick={() => setTab("all")}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition ${
                tab === "all"
                  ? "bg-amber-500/20 text-amber-200 border border-amber-500/40"
                  : "text-slate-400 border border-transparent hover:text-slate-200"
              }`}
            >
              {t.tabAll(totalCount)}
            </button>
            <label className="ml-2 text-xs text-slate-300 inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md border border-white/10 cursor-pointer hover:bg-white/5">
              <input
                type="checkbox"
                checked={onlyRecruitable}
                onChange={(e) => setOnlyRecruitable(e.target.checked)}
                className="accent-amber-400"
              />
              {t.onlyRecruitable(recruitableCount)}
            </label>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-400 flex-wrap">
            {(Object.keys(t.types) as LocationType[]).map((tp) => (
              <span key={tp} className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: TYPE_COLORS[tp] }} />
                {t.types[tp]}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto px-6 py-6">
        {tab === "map" ? (
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-center justify-between mb-2 text-xs text-slate-400">
                <span>{t.mapHint}</span>
                <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={showNames}
                    onChange={(e) => setShowNames(e.target.checked)}
                    className="accent-amber-400"
                  />
                  {t.showNames}
                </label>
              </div>

              <div
                className="relative w-full rounded-2xl overflow-hidden border border-amber-500/20"
                style={{
                  aspectRatio: "1 / 1",
                  backgroundImage: `url(${worldMap})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "inset 0 0 80px rgba(0,0,0,.6)",
                }}
              >
                {MAP_LOCATIONS.map((loc) => (
                  <Marker
                    key={loc.id}
                    loc={loc}
                    count={(byMap[loc.id] || []).length}
                    active={selection?.kind === "map" && selection.id === loc.id}
                    showName={showNames}
                    onClick={() => setSelection({ kind: "map", id: loc.id })}
                  />
                ))}
              </div>

              <div className="mt-4">
                <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-2">
                  {t.outOfMapTitle}
                </div>
                <div className="flex flex-wrap gap-2">
                  {OUT_OF_MAP_REGIONS.map(({ id, emoji }) => {
                    const r = t.regions[id];
                    const list = byRegion[id] || [];
                    if (!r) return null;
                    const active = selection?.kind === "region" && selection.id === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setSelection({ kind: "region", id })}
                        className={`text-xs px-3 py-1.5 rounded-full border transition inline-flex items-center gap-1.5 ${
                          active
                            ? "bg-amber-500/20 border-amber-500/50 text-amber-200"
                            : "border-white/10 text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span className="opacity-70">{emoji}</span>
                        {r.name}
                        <span className="text-slate-500">{list.length}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {sidebar && (
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                monsters={sidebar.monsters}
                onClose={() => setSelection(null)}
                t={t}
              />
            )}
          </div>
        ) : (
          <div>
            <div className="mb-4 flex items-center gap-3 flex-wrap">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="flex-1 min-w-[260px] px-4 py-2 rounded-lg bg-slate-900/70 border border-white/10 text-sm focus:outline-none focus:border-amber-500/50"
              />
              <span className="text-xs text-slate-400">{t.filteredOf(allFiltered.length, filtered.length)}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {allFiltered.map((m) => (
                <MonsterCard key={m.id} m={m} t={t} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
