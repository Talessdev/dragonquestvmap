import { useMemo, useState } from "react";

const FAMILIES: Array<{ test: RegExp; color: string; glyph: string }> = [
  { test: /slime|babble|gapplin|cureslime|healslime|king slime|she-slime|mottle/i, color: "#3b82f6", glyph: "◐" },
  { test: /dragon|drag-?goon|wyvern|chimera|wyrtle/i, color: "#ef4444", glyph: "▲" },
  { test: /dracky|drakeema|drackyma|bat|hawk|chirpy|kite|cassowary|trumpeter|parrot|raven|purgatory|fishkiss/i, color: "#22d3ee", glyph: "✦" },
  { test: /skeleton|zombie|ghost|wight|necromancer|reaper|spirit|undead|corpse|izrail|moonface|shaman|priest|cursed|funghoul/i, color: "#a855f7", glyph: "☠" },
  { test: /knight|warrior|soldier|trooper|hero|rider|hunter|rogue|fighter|mage|conkuistador|battler|killer|machine|bewarewolf/i, color: "#64748b", glyph: "⚔" },
  { test: /demon|devil|gargoyle|satan|minidemon|evil|hell|jami/i, color: "#dc2626", glyph: "♆" },
  { test: /golem|stoneman|rockbomb|metal king|bazax|grendel|behemoth|saurus|barbarossa|ogre/i, color: "#a16207", glyph: "■" },
  { test: /worm|larva|empusa|beetle|gopher|rat|mole|cicada|al-mi'raj|sloth|skunker|stink|newt|burr/i, color: "#84cc16", glyph: "✧" },
  { test: /plant|cactus|grass|toadstool|laughing|seed|tongue|treeface|red eater|blue eater|evil apple/i, color: "#16a34a", glyph: "❀" },
  { test: /candle|lamp|wisp|fire|flame|bomb|boom|poker/i, color: "#f97316", glyph: "✺" },
  { test: /chest|mimic|dancing|jewel|urn|pot|man-eating|goodybag|hood/i, color: "#d4af37", glyph: "◈" },
  { test: /sabrecat|sabrecub|panther|cat|jowler|wolf|bandit|jailcat/i, color: "#f59e0b", glyph: "✦" },
  { test: /lizard|naga|troglodyte|capala|tortragon|snake|serpent/i, color: "#10b981", glyph: "▽" },
  { test: /eye/i, color: "#fb7185", glyph: "◉" },
  { test: /shell|merman|octo|sea|fish|merm|water|squid/i, color: "#06b6d4", glyph: "≈" },
];
const DEFAULT = { color: "#94a3b8", glyph: "✺" };

function fallbackStyle(name: string) {
  for (const f of FAMILIES) if (f.test.test(name)) return f;
  return DEFAULT;
}

interface Props { name: string; image: string | null; size?: number; }

export function MonsterIcon({ name, image, size = 48 }: Props) {
  const [errored, setErrored] = useState(false);
  const fb = useMemo(() => fallbackStyle(name), [name]);
  const showImage = image && !errored;

  return (
    <div
      className="relative flex items-center justify-center rounded-md shrink-0 ring-1 ring-white/10 overflow-hidden"
      style={{
        width: size,
        height: size,
        background: showImage
          ? "radial-gradient(circle at 30% 25%, #1e293b 0%, #020617 100%)"
          : `radial-gradient(circle at 30% 25%, ${fb.color}55 0%, ${fb.color}11 65%, transparent 100%), linear-gradient(145deg, #0f172a 0%, #1e293b 100%)`,
        boxShadow: `inset 0 0 0 1px ${fb.color}40, 0 1px 2px rgba(0,0,0,.4)`,
      }}
    >
      {showImage ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="w-full h-full object-contain p-0.5"
          style={{ imageRendering: "auto" }}
        />
      ) : (
        <span style={{ color: fb.color, fontSize: size * 0.55, lineHeight: 1, textShadow: `0 0 8px ${fb.color}88` }}>
          {fb.glyph}
        </span>
      )}
    </div>
  );
}
