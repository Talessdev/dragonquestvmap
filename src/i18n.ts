export type Lang = "pt" | "en" | "es";

export const LANG_LABELS: Record<Lang, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export interface Strings {
  subtitle: string;
  sources: { bestiary: string; sprites: string };
  tabMap: string;
  tabAll: (n: number) => string;
  onlyRecruitable: (n: number) => string;
  showNames: string;
  mapHint: string;
  outOfMapTitle: string;
  searchPlaceholder: string;
  filteredOf: (a: number, b: number) => string;
  closeAria: string;
  empty: string;
  countOne: string;
  countMany: string;
  sidebarFooter: string;
  notRecruitable: string;
  recruitPrefix: string;
  rateVaries: string;
  expLabel: string;
  goldLabel: string;
  otherLocations: (n: number) => string;
  types: { town: string; castle: string; tower: string; cave: string; shrine: string; other: string };
  regions: Record<string, { name: string; description: string }>;
  recruitDifficulty: { veryEasy: string; easy: string; medium: string; hard: string; veryHard: string };
}

const pt: Strings = {
  subtitle: "Mapa interativo de monstros · versão PlayStation 2 - feito por @talesdev",
  sources: { bestiary: "Bestiário · GameFAQs (DS/PS2)", sprites: "Sprites · Dragon Quest Wiki" },
  tabMap: "Mapa",
  tabAll: (n) => `Todos os monstros (${n})`,
  onlyRecruitable: (n) => `Apenas recrutáveis (${n})`,
  showNames: "Mostrar nomes",
  mapHint: "Clique em um marcador para ver os monstros, drops e taxas naquele local.",
  outOfMapTitle: "Áreas fora do mapa-múndi · genéricas",
  searchPlaceholder: "Buscar por nome, local ou item...",
  filteredOf: (a, b) => `${a} de ${b}`,
  closeAria: "Fechar",
  empty: "Nenhum monstro registrado aqui.",
  countOne: "monstro",
  countMany: "monstros",
  sidebarFooter: "Drops e taxas conforme as fontes oficiais do guia.",
  notRecruitable: "Não recrutável",
  recruitPrefix: "★ Recruta",
  rateVaries: "taxa varia",
  expLabel: "EXP",
  goldLabel: "Ouro",
  otherLocations: (n) => `+ ${n} outros locais`,
  types: { town: "Vila", castle: "Castelo", tower: "Torre", cave: "Caverna", shrine: "Templo", other: "Outro" },
  regions: {
    central_overworld: { name: "Continente Central (genérico)", description: "Encontros aleatórios em qualquer parte do continente central." },
    faerie: { name: "Reino das Fadas", description: "Faerie Lea, Dwarf's Den e arredores — área não exibida no mapa-múndi central." },
    ice: { name: "Palácio de Inverno", description: "Winter Palace e T'n'T Spring Board — pólo gelado fora do mapa principal." },
    nadiria: { name: "Mundo Demoníaco (Nadiria)", description: "Mt. Zugzwang, Neverglade e Precaria — terras de Mildrath/Esturk." },
    estark: { name: "Labirinto de Estark", description: "Bonus dungeon do PS2/DS, acessível na 3ª geração." },
    pontoon: { name: "Pontoon", description: "Vila/área isolada de Pontoon, fora do mapa-múndi." },
    sea: { name: "Mares", description: "Encontros nas águas do mapa-múndi (precisam do navio)." },
  },
  recruitDifficulty: { veryEasy: "Muito fácil", easy: "Fácil", medium: "Médio", hard: "Difícil", veryHard: "Muito difícil" },
};

const en: Strings = {
  subtitle: "Interactive monster map · PlayStation 2 @talesdev",
  sources: { bestiary: "Bestiary · GameFAQs (DS/PS2)", sprites: "Sprites · Dragon Quest Wiki" },
  tabMap: "Map",
  tabAll: (n) => `All monsters (${n})`,
  onlyRecruitable: (n) => `Only recruitable (${n})`,
  showNames: "Show names",
  mapHint: "Click a marker to see the monsters, drops and rates at that location.",
  outOfMapTitle: "Off-world areas · generic regions",
  searchPlaceholder: "Search by name, location or item...",
  filteredOf: (a, b) => `${a} of ${b}`,
  closeAria: "Close",
  empty: "No monsters registered here.",
  countOne: "monster",
  countMany: "monsters",
  sidebarFooter: "Drops and rates according to the official guide sources.",
  notRecruitable: "Not recruitable",
  recruitPrefix: "★ Recruit",
  rateVaries: "rate varies",
  expLabel: "EXP",
  goldLabel: "Gold",
  otherLocations: (n) => `+ ${n} more locations`,
  types: { town: "Town", castle: "Castle", tower: "Tower", cave: "Cave", shrine: "Shrine", other: "Other" },
  regions: {
    central_overworld: { name: "Central Continent (generic)", description: "Random encounters anywhere on the central continent." },
    faerie: { name: "Faerie Realm", description: "Faerie Lea, Dwarf's Den and surroundings — area not shown on the central world map." },
    ice: { name: "Winter Palace", description: "Winter Palace and T'n'T Spring Board — frozen pole outside the main map." },
    nadiria: { name: "Demon World (Nadiria)", description: "Mt. Zugzwang, Neverglade and Precaria — Mildrath/Esturk's domain." },
    estark: { name: "Estark's Labyrinth", description: "Bonus dungeon of PS2/DS, accessible in the 3rd generation." },
    pontoon: { name: "Pontoon", description: "Isolated village of Pontoon, off the world map." },
    sea: { name: "Seas", description: "Encounters on the world map waters (ship required)." },
  },
  recruitDifficulty: { veryEasy: "Very easy", easy: "Easy", medium: "Medium", hard: "Hard", veryHard: "Very hard" },
};

const es: Strings = {
  subtitle: "Mapa interactivo de monstruos · versión PlayStation 2 @talesdev",
  sources: { bestiary: "Bestiario · GameFAQs (DS/PS2)", sprites: "Sprites · Dragon Quest Wiki" },
  tabMap: "Mapa",
  tabAll: (n) => `Todos los monstruos (${n})`,
  onlyRecruitable: (n) => `Solo reclutables (${n})`,
  showNames: "Mostrar nombres",
  mapHint: "Haz clic en un marcador para ver los monstruos, drops y tasas en ese lugar.",
  outOfMapTitle: "Áreas fuera del mapamundi · genéricas",
  searchPlaceholder: "Buscar por nombre, lugar u objeto...",
  filteredOf: (a, b) => `${a} de ${b}`,
  closeAria: "Cerrar",
  empty: "Ningún monstruo registrado aquí.",
  countOne: "monstruo",
  countMany: "monstruos",
  sidebarFooter: "Drops y tasas según las fuentes oficiales de la guía.",
  notRecruitable: "No reclutable",
  recruitPrefix: "★ Recluta",
  rateVaries: "tasa varía",
  expLabel: "EXP",
  goldLabel: "Oro",
  otherLocations: (n) => `+ ${n} lugares más`,
  types: { town: "Pueblo", castle: "Castillo", tower: "Torre", cave: "Cueva", shrine: "Santuario", other: "Otro" },
  regions: {
    central_overworld: { name: "Continente Central (genérico)", description: "Encuentros aleatorios en cualquier parte del continente central." },
    faerie: { name: "Reino de las Hadas", description: "Faerie Lea, Dwarf's Den y alrededores — área no mostrada en el mapamundi central." },
    ice: { name: "Palacio de Invierno", description: "Winter Palace y T'n'T Spring Board — polo helado fuera del mapa principal." },
    nadiria: { name: "Mundo Demoníaco (Nadiria)", description: "Mt. Zugzwang, Neverglade y Precaria — dominio de Mildrath/Esturk." },
    estark: { name: "Laberinto de Estark", description: "Bonus dungeon del PS2/DS, accesible en la 3ª generación." },
    pontoon: { name: "Pontoon", description: "Aldea aislada de Pontoon, fuera del mapamundi." },
    sea: { name: "Mares", description: "Encuentros en las aguas del mapamundi (se necesita el barco)." },
  },
  recruitDifficulty: { veryEasy: "Muy fácil", easy: "Fácil", medium: "Medio", hard: "Difícil", veryHard: "Muy difícil" },
};

export const STRINGS: Record<Lang, Strings> = { pt, en, es };

export function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem("dq5_lang");
  if (saved === "pt" || saved === "en" || saved === "es") return saved;
  const nav = window.navigator.language?.toLowerCase() || "";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("es")) return "es";
  return "pt";
}
