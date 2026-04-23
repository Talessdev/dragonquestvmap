// Auto-generated from the kestanarx Bestiary Guide on GameFAQs (DS, applies to PS2 fan-translation)
  // and Dragon Quest Wiki (dragon-quest.org) for monster sprite images.
  // All location names use the official PS2/DS English localization.

  export type LocationType = "town" | "castle" | "tower" | "cave" | "shrine" | "other";

  export interface MapLocation {
    id: string;
    name: string;
    x: number;
    y: number;
    type: LocationType;
  }

  export interface RegionInfo {
    name: string;
    description: string;
  }

  export type PlaceKind = "map" | "region";

  export interface Place {
    kind: PlaceKind;
    id: string;
    raw: string;
  }

  export interface Monster {
    id: number;
    name: string;
    exp: string | null;
    gold: string | null;
    drop: string | null;
    dropRate: string | null;
    recruitRate: string | null;
    recruitLevel: string | null;
    image: string | null;
    locations: string[];
    places: Place[];
  }

  export const MAP_LOCATIONS: MapLocation[] = [
  {
    "id": "auction_site",
    "name": "Auction Site",
    "x": 46,
    "y": 7,
    "type": "other"
  },
  {
    "id": "uptaten_towers",
    "name": "Uptaten Towers",
    "x": 36,
    "y": 8,
    "type": "tower"
  },
  {
    "id": "mantleplace",
    "name": "Mantleplace",
    "x": 46,
    "y": 14,
    "type": "town"
  },
  {
    "id": "coburg",
    "name": "Coburg",
    "x": 62,
    "y": 15,
    "type": "castle"
  },
  {
    "id": "ancient_ruins",
    "name": "Ancient Ruins",
    "x": 80,
    "y": 11,
    "type": "shrine"
  },
  {
    "id": "whealbrook",
    "name": "Whealbrook",
    "x": 55,
    "y": 23,
    "type": "town"
  },
  {
    "id": "moot_point",
    "name": "Moot Point",
    "x": 88,
    "y": 20,
    "type": "other"
  },
  {
    "id": "cataract_caves",
    "name": "Cataract Caves",
    "x": 13,
    "y": 28,
    "type": "cave"
  },
  {
    "id": "roundbeck",
    "name": "Roundbeck",
    "x": 46,
    "y": 28,
    "type": "town"
  },
  {
    "id": "fortuna",
    "name": "Fortuna",
    "x": 60,
    "y": 31,
    "type": "town"
  },
  {
    "id": "zoomingale",
    "name": "Zoomingale",
    "x": 25,
    "y": 35,
    "type": "town"
  },
  {
    "id": "lodestar_harbour",
    "name": "Lodestar Harbour",
    "x": 39,
    "y": 36,
    "type": "town"
  },
  {
    "id": "littlehaven",
    "name": "Littlehaven",
    "x": 54,
    "y": 37,
    "type": "town"
  },
  {
    "id": "estuary_sanctuary",
    "name": "Estuary Sanctuary",
    "x": 90,
    "y": 36,
    "type": "shrine"
  },
  {
    "id": "ventuno",
    "name": "Ventuno",
    "x": 48,
    "y": 40,
    "type": "other"
  },
  {
    "id": "scary_lair",
    "name": "Scary Lair",
    "x": 23,
    "y": 42,
    "type": "cave"
  },
  {
    "id": "heavens_above_abbey",
    "name": "Heaven's Above Abbey",
    "x": 62,
    "y": 43,
    "type": "shrine"
  },
  {
    "id": "lofty_peak",
    "name": "Lofty Peak",
    "x": 88,
    "y": 43,
    "type": "town"
  },
  {
    "id": "hay",
    "name": "Hay",
    "x": 34,
    "y": 48,
    "type": "town"
  },
  {
    "id": "diggery_pokery",
    "name": "Diggery Pokery",
    "x": 89,
    "y": 51,
    "type": "cave"
  },
  {
    "id": "crocodilopolis",
    "name": "Crocodilopolis",
    "x": 50,
    "y": 53,
    "type": "town"
  },
  {
    "id": "stockenbarrel",
    "name": "Stockenbarrel",
    "x": 11,
    "y": 51,
    "type": "town"
  },
  {
    "id": "the_pothold",
    "name": "The Pothold",
    "x": 5,
    "y": 56,
    "type": "cave"
  },
  {
    "id": "scuttlebutt",
    "name": "Scuttlebutt",
    "x": 17,
    "y": 56,
    "type": "town"
  },
  {
    "id": "mostroferrato",
    "name": "Mostroferrato",
    "x": 13,
    "y": 65,
    "type": "town"
  },
  {
    "id": "abovitall_tower",
    "name": "Abovitall Tower",
    "x": 71,
    "y": 59,
    "type": "tower"
  },
  {
    "id": "sacred_lake",
    "name": "Sacred Lake",
    "x": 51,
    "y": 68,
    "type": "shrine"
  },
  {
    "id": "knightmare_towers",
    "name": "Knightmare Towers",
    "x": 77,
    "y": 69,
    "type": "tower"
  },
  {
    "id": "mount_magmageddon",
    "name": "Mount Magmageddon",
    "x": 21,
    "y": 74,
    "type": "cave"
  },
  {
    "id": "stairway_to_zenithia",
    "name": "Stairway to Zenithia",
    "x": 50,
    "y": 77,
    "type": "tower"
  },
  {
    "id": "riteof_passage",
    "name": "Riteof Passage",
    "x": 88,
    "y": 74,
    "type": "shrine"
  },
  {
    "id": "northminster",
    "name": "Northminster",
    "x": 75,
    "y": 77,
    "type": "town"
  },
  {
    "id": "gotha",
    "name": "Gotha",
    "x": 79,
    "y": 80,
    "type": "castle"
  },
  {
    "id": "knot_welcome_inne",
    "name": "Knot Welcome Inne",
    "x": 76,
    "y": 87,
    "type": "town"
  },
  {
    "id": "knick_knackatory",
    "name": "Knick-knackatory",
    "x": 46,
    "y": 82,
    "type": "other"
  },
  {
    "id": "helmunaptra",
    "name": "Helmunaptra",
    "x": 35,
    "y": 92,
    "type": "town"
  },
  {
    "id": "oasis",
    "name": "Oasis",
    "x": 48,
    "y": 92,
    "type": "other"
  },
  {
    "id": "talon_tower",
    "name": "Talon Tower",
    "x": 13,
    "y": 97,
    "type": "tower"
  },
  {
    "id": "dominicus_dominion",
    "name": "Dominicus's Dominion",
    "x": 60,
    "y": 98,
    "type": "shrine"
  },
  {
    "id": "porgie_estate",
    "name": "The Porgie Estate",
    "x": 96,
    "y": 96,
    "type": "other"
  }
];

  export const REGIONS: Record<string, RegionInfo> = {
  "central_overworld": {
    "name": "Continente Central (genérico)",
    "description": "Encontros aleatórios em qualquer parte do continente central."
  },
  "faerie": {
    "name": "Reino das Fadas",
    "description": "Faerie Lea, Dwarf's Den e arredores — área não exibida no mapa-múndi central."
  },
  "ice": {
    "name": "Palácio de Inverno",
    "description": "Winter Palace e T'n'T Spring Board — pólo gelado fora do mapa principal."
  },
  "nadiria": {
    "name": "Mundo Demoníaco (Nadiria)",
    "description": "Mt. Zugzwang, Neverglade e Precaria — terras de Mildrath/Esturk."
  },
  "estark": {
    "name": "Labirinto de Estark",
    "description": "Bonus dungeon do PS2/DS, acessível na 3ª geração."
  },
  "pontoon": {
    "name": "Pontoon",
    "description": "Vila/área isolada de Pontoon, fora do mapa-múndi."
  },
  "sea": {
    "name": "Mares",
    "description": "Encontros nas águas do mapa-múndi (precisam do navio)."
  }
};

  export const MONSTERS: Monster[] = [
  {
    "id": 1,
    "name": "Slime",
    "exp": "1",
    "gold": "1",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/2",
    "locations": [
      "Whealbrook Adit (G1/G2/G3)",
      "Area outside of Ancient Ruins (G1)",
      "Fortuna Area (G2)",
      "Dominicus's Dominion Area (G2/G3)",
      "Desert area west of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/31/Slime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G1/G2/G3)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G2)"
      },
      {
        "kind": "map",
        "id": "dominicus_dominion",
        "raw": "Dominicus's Dominion Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Desert area west of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 2,
    "name": "Burr Baby",
    "exp": "2",
    "gold": "2",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Adit (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/5/5d/Burrbaby_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G1)"
      }
    ]
  },
  {
    "id": 3,
    "name": "Boring Bug",
    "exp": "3",
    "gold": "2",
    "drop": "Medicinal Herb",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Adit (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/a/a4/Boringbug_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G1)"
      }
    ]
  },
  {
    "id": 4,
    "name": "Dracky",
    "exp": "4",
    "gold": "3",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/4",
    "locations": [
      "Whealbrook Adit (G1)",
      "Whealbrook Area (G2)",
      "Whealbrook Area (South Area) (G3)",
      "Roundbeck Area (G1/G2/G3)",
      "Area outside of Uptaten Towers (G2)",
      "Area outside of Uptaten Towers (North, West, & South Areas)(G3)",
      "Fortuna Area (G3)",
      "Area nearest to Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/ec/Dracky_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G1)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G1/G2/G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G2)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Area nearest to Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 5,
    "name": "Hammerhood",
    "exp": "6",
    "gold": "3",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Adit (G1)",
      "Roundbeck Area (G1)",
      "Area nearest to the Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6f/Hammerhood_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G1)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G1)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Area nearest to the Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 6,
    "name": "Bunicorn",
    "exp": "4",
    "gold": "3",
    "drop": "Leather Hat",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Adit (G1)",
      "Roundbeck Area (G1)",
      "Area nearest to the Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/99/Bunicorn_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G1)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G1)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Area nearest to the Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 7,
    "name": "Combatterpillar",
    "exp": "4",
    "gold": "4",
    "drop": "Seed of Wisdom",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Roundbeck Area (G1)",
      "Area outside of Uptaten Towers (G1)",
      "Area nearest to the Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/a2/Combatterpillar_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G1)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G1)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Area nearest to the Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 8,
    "name": "Bad Apple",
    "exp": "9",
    "gold": "8",
    "drop": "Chimaera Wing",
    "dropRate": "1/32",
    "recruitLevel": "7",
    "recruitRate": "1/4",
    "locations": [
      "Faerie Lea Area (G1/G3)",
      "Dwarf's Den (Faerie Land) (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/5c/Badapple_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Faerie Lea Area (G1/G3)"
      }
    ]
  },
  {
    "id": 9,
    "name": "Funky Ferret",
    "exp": "5",
    "gold": "6",
    "drop": "Seed of Agility",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (G1)",
      "Area outside of Uptaten Towers (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6d/Funkyferret_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G1)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G1)"
      }
    ]
  },
  {
    "id": 10,
    "name": "Bubble Slime",
    "exp": "6",
    "gold": "7",
    "drop": "Antidotal Herb",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Roundbeck Area (G1)",
      "Area outside of Uptaten Towers (G1)",
      "Faerie Lea Area (G1/G3)",
      "Dominicus's Dominion Area (G2/G3)",
      "Area nearest to the Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/4d/Bubbleslime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G1)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G1)"
      },
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Faerie Lea Area (G1/G3)"
      },
      {
        "kind": "map",
        "id": "dominicus_dominion",
        "raw": "Dominicus's Dominion Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Area nearest to the Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 11,
    "name": "Fat Rat",
    "exp": "4",
    "gold": "8",
    "drop": "Medicinal Herb",
    "dropRate": "1/32",
    "recruitLevel": "7",
    "recruitRate": "1/2",
    "locations": [
      "Roundbeck Area (G1)",
      "Area outside of Uptaten Towers (G1)",
      "Area nearest to the Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/55/Fatrat_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G1)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G1)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Area nearest to the Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 12,
    "name": "Bona Constrictor",
    "exp": "7",
    "gold": "7",
    "drop": "Medicinal Herb",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Uptaten Towers (Kitchen Area) (G1)",
      "Area outside of Winter Palace (G1)",
      "Porgie Estate Area (G3)",
      "Area outside of T'n'T Spring Board (Winter Palace Area) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/ab/Bonaconstrictor_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Uptaten Towers (Kitchen Area) (G1)"
      },
      {
        "kind": "region",
        "id": "ice",
        "raw": "Area outside of Winter Palace (G1)"
      },
      {
        "kind": "map",
        "id": "porgie_estate",
        "raw": "Porgie Estate Area (G3)"
      }
    ]
  },
  {
    "id": 13,
    "name": "Lickspittle",
    "exp": "8",
    "gold": "5",
    "drop": "Bamboo Spear",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Anywhere on Faerie Land Overworld (G1/G3)",
      "Dwarf's Den (Faerie Land) (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/1a/Lickspittle_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Anywhere on Faerie Land Overworld (G1/G3)"
      }
    ]
  },
  {
    "id": 14,
    "name": "Frizzard",
    "exp": "12",
    "gold": "8",
    "drop": "Leather Hat",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (G1)",
      "Dwarf's Den (Faerie Land) (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cd/Frizzard_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G1)"
      },
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Dwarf's Den (Faerie Land) (G1/G3)"
      }
    ]
  },
  {
    "id": 15,
    "name": "Jailcat",
    "exp": "11",
    "gold": "7",
    "drop": "Rags",
    "dropRate": "1/32",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Whealbrook Area (G1)",
      "Area outside of Uptaten Towers (G1)",
      "Fortuna Area (G2)",
      "Desert area west of Talon Tower (G3)"
    ],
    "image": null,
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G1)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G1)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G2)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Desert area west of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 16,
    "name": "Mental Pitcher",
    "exp": "13",
    "gold": "10",
    "drop": "Seed of Magic",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (G1)",
      "Anywhere on Faerie Land Overworld (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6a/Mentalpitcher_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G1)"
      },
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Anywhere on Faerie Land Overworld (G1/G3)"
      }
    ]
  },
  {
    "id": 17,
    "name": "Time Burrm",
    "exp": "15",
    "gold": "9",
    "drop": "Medicinal Herb",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Dwarf's Den (Faerie Land) (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/e4/Timeburrm_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Dwarf's Den (Faerie Land) (G1/G3)"
      }
    ]
  },
  {
    "id": 18,
    "name": "Prestidigitator",
    "exp": "18",
    "gold": "20",
    "drop": "Magic Water",
    "dropRate": "1/32",
    "recruitLevel": "10",
    "recruitRate": "1/2",
    "locations": [
      "Area outside of Winter Palace (G1)",
      "Winter Palace (G1)",
      "Coburg Castle Area (G1)",
      "Lodestar Harbour Area (G2/G3)",
      "Hay Area (G2/G3)",
      "Scary Lair (G2/G3)",
      "Zoomingale Area (G2/G3)",
      "Pontoon Area (G2/G3)",
      "Area outside of T'n'T Spring Board (Winter Palace Area) (G3)",
      "Hill area farthest east of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/wiki/Special:FilePath/Prestidigitator_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "ice",
        "raw": "Area outside of Winter Palace (G1)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (G1)"
      },
      {
        "kind": "map",
        "id": "lodestar_harbour",
        "raw": "Lodestar Harbour Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "hay",
        "raw": "Hay Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Zoomingale Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "pontoon",
        "raw": "Pontoon Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Hill area farthest east of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 19,
    "name": "Cactiball",
    "exp": "16",
    "gold": "9",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Winter Palace (G1)",
      "Area outside of T'n'T Spring Board (Winter Palace Area) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/19/Cactiball_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "ice",
        "raw": "Area outside of Winter Palace (G1)"
      }
    ]
  },
  {
    "id": 20,
    "name": "Lava Larva",
    "exp": "17",
    "gold": "10",
    "drop": "Medicinal Herb",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Dwarf's Den (Faerie Land) (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/94/Lavalarva_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Dwarf's Den (Faerie Land) (G1/G3)"
      }
    ]
  },
  {
    "id": 21,
    "name": "Will-o'-the-whips",
    "exp": "12",
    "gold": "7",
    "drop": "Medicinal Herb",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Uptaten Towers (Kitchen Area) (G1)",
      "Dwarf's Den (Faerie Land) (G1/G3)",
      "Porgie Estate Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/49/Willothewhips_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Uptaten Towers (Kitchen Area) (G1)"
      },
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Dwarf's Den (Faerie Land) (G1/G3)"
      },
      {
        "kind": "map",
        "id": "porgie_estate",
        "raw": "Porgie Estate Area (G3)"
      }
    ]
  },
  {
    "id": 22,
    "name": "Foetid Ferret",
    "exp": "15",
    "gold": "11",
    "drop": "Chimaera Wing",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Dwarf's Den (Faerie Land) (G1/G3)",
      "Coburg Castle Area (G1)",
      "Hill area farthest east of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6b/Foetidferret_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Dwarf's Den (Faerie Land) (G1/G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (G1)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Hill area farthest east of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 23,
    "name": "Dirty Rat",
    "exp": "14",
    "gold": "13",
    "drop": "Seed of Agility",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (G1)",
      "Coburg Castle Area (G1)",
      "Hill area farthest east of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/a4/Dirtyrat_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G1)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (G1)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Hill area farthest east of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 24,
    "name": "Drackyma",
    "exp": "16",
    "gold": "10",
    "drop": "Wayfarer's Clothes",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Winter Palace (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/9/9d/Drackyma_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "ice",
        "raw": "Winter Palace (G1)"
      }
    ]
  },
  {
    "id": 25,
    "name": "Ghost",
    "exp": "11",
    "gold": "12",
    "drop": "Holy Water",
    "dropRate": "1/32",
    "recruitLevel": "7",
    "recruitRate": "1/2",
    "locations": [
      "Uptaten Towers (Kitchen Area) (G1)",
      "Porgie Estate Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/4d/Ghost_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Uptaten Towers (Kitchen Area) (G1)"
      },
      {
        "kind": "map",
        "id": "porgie_estate",
        "raw": "Porgie Estate Area (G3)"
      }
    ]
  },
  {
    "id": 26,
    "name": "Wax Murderer",
    "exp": "13",
    "gold": "11",
    "drop": "Bronze Knife",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Uptaten Towers (Kitchen Area) (G1)",
      "Porgie Estate Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d9/Waxmurderer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Uptaten Towers (Kitchen Area) (G1)"
      },
      {
        "kind": "map",
        "id": "porgie_estate",
        "raw": "Porgie Estate Area (G3)"
      }
    ]
  },
  {
    "id": 27,
    "name": "Lesionnaire",
    "exp": "25",
    "gold": "12",
    "drop": "Copper Sword",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Ancient Ruins (G1)",
      "Whealbrook Adit (G2/G3)",
      "Whealbrook Area (G2)",
      "Whealbrook Area (South Area) (G3)",
      "Roundbeck Area (G2/G3)",
      "Fortuna Area (G3)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/5c/Lesionnaire_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G3)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      }
    ]
  },
  {
    "id": 28,
    "name": "Spiked Hare",
    "exp": "20",
    "gold": "13",
    "drop": "Fur Hood",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area southeast of Coburg Checkpoint (West checkpoint) (G1)",
      "Winter Palace (G1)",
      "Coburg Castle Area (G1)",
      "Whealbrook Adit (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6c/Spikedhare_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Area southeast of Coburg Checkpoint (West checkpoint) (G1)"
      },
      {
        "kind": "region",
        "id": "ice",
        "raw": "Winter Palace (G1)"
      },
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      }
    ]
  },
  {
    "id": 29,
    "name": "Brrrattling Snake",
    "exp": "22",
    "gold": "12",
    "drop": "Bone Stake",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Winter Palace (G1)",
      "Ancient Ruins (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/c/c3/Brrrattlingsnake_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "ice",
        "raw": "Winter Palace (G1)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Ancient Ruins (G1)"
      }
    ]
  },
  {
    "id": 30,
    "name": "Healslime",
    "exp": "19",
    "gold": "14",
    "drop": "Medicinal Herb",
    "dropRate": "1/8",
    "recruitLevel": "7",
    "recruitRate": "1/32",
    "locations": [
      "Whealbrook Area (G1)",
      "Faerie Lea Area (G1/G3)",
      "Area outside of Ancient Ruins (G1)",
      "Ancient Ruins (G1)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)",
      "Hill area farthest east of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/70/Healslime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G1)"
      },
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Faerie Lea Area (G1/G3)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Hill area farthest east of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 31,
    "name": "Screwball Pitcher",
    "exp": "17",
    "gold": "3",
    "drop": "Seed of Magic",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area southeast of Coburg Checkpoint (West checkpoint) (G1)",
      "Area outside of Ancient Ruins (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/1/19/Screwballpitcher_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Area southeast of Coburg Checkpoint (West checkpoint) (G1)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G1)"
      }
    ]
  },
  {
    "id": 32,
    "name": "Fandangow",
    "exp": "19",
    "gold": "13",
    "drop": "Hardwood Headwear",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/32",
    "locations": [
      "Area southeast of Coburg Checkpoint (West checkpoint) (G1)",
      "Coburg Castle Area (G1/G2)",
      "Coburg Castle Area (North, South, and East Areas) (G3)",
      "Hill area farthest east of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/2b/Fandangow_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Area southeast of Coburg Checkpoint (West checkpoint) (G1)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Hill area farthest east of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 33,
    "name": "Sizzard",
    "exp": "20",
    "gold": "15",
    "drop": "Stone Fangs",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Ancient Ruins (G1)",
      "Ancient Ruins (G1)",
      "Fortuna Area (G2)",
      "Desert area west of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/38/Sizzard_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G2)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Desert area west of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 34,
    "name": "Scaraburrower",
    "exp": "18",
    "gold": "9",
    "drop": "Medicinal Herb",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area southeast of Coburg Checkpoint (West checkpoint) (G1)",
      "Coburg Castle Area (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/d/de/Scaraburrower_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Area southeast of Coburg Checkpoint (West checkpoint) (G1)"
      }
    ]
  },
  {
    "id": 35,
    "name": "Terracotta Warrior",
    "exp": "25",
    "gold": "12",
    "drop": "Seed of Resilience",
    "dropRate": "1/256",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Ancient Ruins (G1)",
      "Whealbrook Adit (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/ee/Terracottawarrior_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      }
    ]
  },
  {
    "id": 36,
    "name": "Eyelasher",
    "exp": "27",
    "gold": "19",
    "drop": "Medicinal Herb",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Ancient Ruins (G1)"
    ],
    "image": "https://dragon-quest.org/w/images/1/1e/Eyelasher_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Ancient Ruins (G1)"
      }
    ]
  },
  {
    "id": 37,
    "name": "Slime Knight",
    "exp": "37",
    "gold": "22",
    "drop": "Bronze Armour",
    "dropRate": "1/32",
    "recruitLevel": "7",
    "recruitRate": "1/4",
    "locations": [
      "Area southeast of Coburg Checkpoint (West checkpoint) (G1)",
      "Area outside of Ancient Ruins (G1)",
      "Coburg Castle Area (G2)",
      "Coburg Castle Area (North, South, and East Areas) (G3)",
      "Coburg Castle Dungeon (G2)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/42/Slimeknight_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Area southeast of Coburg Checkpoint (West checkpoint) (G1)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      }
    ]
  },
  {
    "id": 38,
    "name": "Bag o' Laughs",
    "exp": "10",
    "gold": "55",
    "drop": "Chimaera Wing",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Ancient Ruins (G1)",
      "Fortuna Area (G2)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)",
      "Desert area west of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/0/0a/Bagolaughs_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Desert area west of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 39,
    "name": "Brownie",
    "exp": "21",
    "gold": "15",
    "drop": "Monster Munchies",
    "dropRate": "1/32",
    "recruitLevel": "7",
    "recruitRate": "1/2",
    "locations": [
      "Area outside of Ancient Ruins (G1)",
      "Ancient Ruins (G1)",
      "Whealbrook Adit (G2/G3)",
      "Fortuna Area (G2)",
      "Desert area west of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/bf/Brownie_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G1)"
      },
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G2)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Desert area west of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 40,
    "name": "Rotten Apple",
    "exp": "30",
    "gold": "18",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/2",
    "locations": [
      "Area outside of Uptaten Towers (G2)",
      "Area outside of Uptaten Towers (North, West, & South Areas)(G3)",
      "Area outside of Abovitall Tower (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/f/fe/Rottenapple_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Area outside of Abovitall Tower (G2/G3)"
      }
    ]
  },
  {
    "id": 41,
    "name": "Ticking Timeburrm",
    "exp": "37",
    "gold": "32",
    "drop": "Rockbomb Shard",
    "dropRate": "1/64",
    "recruitLevel": "7",
    "recruitRate": "1/32",
    "locations": [
      "Whealbrook Area (G2)",
      "Whealbrook Area (South Area) (G3)",
      "Roundbeck Area (G2/G3)",
      "Fortuna Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/29/Tickingtimeburrm_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G2)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G3)"
      }
    ]
  },
  {
    "id": 42,
    "name": "Flatulent Ferret",
    "exp": "35",
    "gold": "30",
    "drop": "Scale Shield",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (G2)",
      "Whealbrook Area (South Area) (G3)",
      "Roundbeck Area (G2/G3)",
      "Area outside of Uptaten Towers (G2)",
      "Area outside of Uptaten Towers (North, West, & South Areas)(G3)",
      "Fortuna Area (G2/G3)",
      "Desert area west of Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/0/0f/Flatulentferret_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G2)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G2)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Desert area west of Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 43,
    "name": "Metal Slime",
    "exp": "1350",
    "gold": "75",
    "drop": "Seed of Agility",
    "dropRate": "1/64",
    "recruitLevel": "7",
    "recruitRate": "1/256",
    "locations": [
      "Whealbrook Adit (G2/G3)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)",
      "Scary Lair (G2/G3)",
      "Cataract Caves (G2/G3)",
      "Dominicus's Dominion Area (G2/G3)",
      "Neverglade (G3)",
      "Area outside of Mt. Zugzwang (G3)",
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/b/bc/Metalslime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      },
      {
        "kind": "map",
        "id": "dominicus_dominion",
        "raw": "Dominicus's Dominion Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Neverglade (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 44,
    "name": "Bludgerigar",
    "exp": "38",
    "gold": "30",
    "drop": "Chimaera Wing",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (G2)",
      "Whealbrook Area (South Area) (G3)",
      "Roundbeck Area (G2/G3)",
      "Fortuna Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/ab/Bludgerigar_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G2)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G3)"
      }
    ]
  },
  {
    "id": 45,
    "name": "Funghoul",
    "exp": "40",
    "gold": "35",
    "drop": "Antidotal Herb",
    "dropRate": "1/32",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Whealbrook Area (G2)",
      "Whealbrook Area (South Area) (G3)",
      "Roundbeck Area (G2/G3)",
      "Area outside of Uptaten Towers (G2)",
      "Area outside of Uptaten Towers (North, West, & South Areas)(G3)",
      "Fortuna Area (G3)",
      "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/5a/Funghoul_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (G2)"
      },
      {
        "kind": "map",
        "id": "roundbeck",
        "raw": "Roundbeck Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G2)"
      },
      {
        "kind": "map",
        "id": "fortuna",
        "raw": "Fortuna Area (G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)"
      }
    ]
  },
  {
    "id": 46,
    "name": "Wickerman",
    "exp": "42",
    "gold": "37",
    "drop": "Bronze Knife",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Adit (G2/G3)",
      "Area outside of Uptaten Towers (G2)",
      "Area outside of Uptaten Towers (North, West, & South Areas)(G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/9e/Wickerman_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (G2)"
      }
    ]
  },
  {
    "id": 47,
    "name": "Walking Corpse",
    "exp": "57",
    "gold": "15",
    "drop": "Rags",
    "dropRate": "1/8",
    "recruitLevel": "7",
    "recruitRate": "1/32",
    "locations": [
      "Whealbrook Adit (G2/G3)",
      "Coburg Castle Dungeon (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/0/05/Walkingcorpse_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Dungeon (G2)"
      }
    ]
  },
  {
    "id": 48,
    "name": "Owlbear",
    "exp": "45",
    "gold": "40",
    "drop": "Iron Shield",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Adit (G2/G3)",
      "Coburg Castle Area (G2)",
      "Coburg Castle Area (North, South, and East Areas) (G3)",
      "Area outside of Abovitall Tower (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cd/Owlbear_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Area outside of Abovitall Tower (G2/G3)"
      }
    ]
  },
  {
    "id": 49,
    "name": "Powie Yowie",
    "exp": "49",
    "gold": "37",
    "drop": "Holy Water",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/32",
    "locations": [
      "Coburg Castle Area (G2)",
      "Coburg Castle Area (North, South, and East Areas) (G3)",
      "Coburg Castle Dungeon (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/d/df/Powieyowie_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (G2)"
      }
    ]
  },
  {
    "id": 50,
    "name": "Cannibox",
    "exp": "23",
    "gold": "95",
    "drop": "Mini Medal",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Scary Lair (One Time Encounter) (G2)",
      "Gotha Pass (2x One Time Encounters) (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d5/Cannibox_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (One Time Encounter) (G2)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (2x One Time Encounters) (G2)"
      }
    ]
  },
  {
    "id": 51,
    "name": "Wyrtle",
    "exp": "42",
    "gold": "38",
    "drop": "Seed of Resilience",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Adit (G2/G3)",
      "Coburg Castle Dungeon (G2)",
      "Abovitall Tower (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/5/52/Wyrtle_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Adit (G2/G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Dungeon (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      }
    ]
  },
  {
    "id": 52,
    "name": "Legerdeman",
    "exp": "45",
    "gold": "47",
    "drop": "Magic Water",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Coburg Castle Dungeon (G2)",
      "Area outside of Abovitall Tower (G2/G3)"
    ],
    "image": "https://dragon-quest.org/wiki/Special:FilePath/Legerdeman_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Dungeon (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Area outside of Abovitall Tower (G2/G3)"
      }
    ]
  },
  {
    "id": 53,
    "name": "Small Fry",
    "exp": "```",
    "gold": "```",
    "drop": "```",
    "dropRate": "```",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Coburg Castle Area (G2)",
      "Coburg Castle Area (North, South, and East Areas) (G3)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)",
      "Lodestar Harbour Area (G2/G3)",
      "Hay Area (G2/G3)",
      "Zoomingale Area (G2/G3)",
      "Pontoon Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/f/f9/Smallfry_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "lodestar_harbour",
        "raw": "Lodestar Harbour Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "hay",
        "raw": "Hay Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Zoomingale Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "pontoon",
        "raw": "Pontoon Area (G2/G3)"
      }
    ]
  },
  {
    "id": 54,
    "name": "Ruff Ruffian",
    "exp": "48",
    "gold": "37",
    "drop": "Copper Sword",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Abovitall Tower (G2/G3)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)",
      "Lodestar Harbour Area (G2/G3)",
      "Hay Area (G2/G3)",
      "Zoomingale Area (G2/G3)",
      "Pontoon Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/8b/Ruffruffian_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Area outside of Abovitall Tower (G2/G3)"
      },
      {
        "kind": "map",
        "id": "lodestar_harbour",
        "raw": "Lodestar Harbour Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "hay",
        "raw": "Hay Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Zoomingale Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "pontoon",
        "raw": "Pontoon Area (G2/G3)"
      }
    ]
  },
  {
    "id": 55,
    "name": "Grudgerigar",
    "exp": "44",
    "gold": "31",
    "drop": "Medicinal Herb",
    "dropRate": "1/8",
    "recruitLevel": "9",
    "recruitRate": "1/32",
    "locations": [
      "Coburg Castle Dungeon (G2)",
      "Area outside of Abovitall Tower (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/c9/Grudgerigar_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Dungeon (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Area outside of Abovitall Tower (G2/G3)"
      }
    ]
  },
  {
    "id": 56,
    "name": "Eyepod",
    "exp": "42",
    "gold": "38",
    "drop": "Chimaera Wing",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Coburg Castle Dungeon (G2)",
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b7/Eyepod_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Dungeon (G2)"
      },
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      }
    ]
  },
  {
    "id": 57,
    "name": "Hulagan",
    "exp": "55",
    "gold": "42",
    "drop": "Leather Kilt",
    "dropRate": "1/32",
    "recruitLevel": "9",
    "recruitRate": "1/16",
    "locations": [
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)",
      "Area outside of Scary Lair (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/e0/Hulagan_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Area outside of Scary Lair (G2/G3)"
      }
    ]
  },
  {
    "id": 58,
    "name": "Cross Eye",
    "exp": "52",
    "gold": "28",
    "drop": "Giant Mallet",
    "dropRate": "1/16",
    "recruitLevel": "9",
    "recruitRate": "1/32",
    "locations": [
      "Abovitall Tower (G2)",
      "Area outside of Scary Lair (G2/G3)",
      "Scary Lair (G2/G3)",
      "Tunnel south of Zoomingale (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/58/Crosseye_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Area outside of Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Tunnel south of Zoomingale (G2/G3)"
      }
    ]
  },
  {
    "id": 59,
    "name": "Urnexpected",
    "exp": "71",
    "gold": "79",
    "drop": "Mini Medal",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Pot in Stockenbarrel Item Shop Area (One Time Encounter) (G2)",
      "Pot in Helmunaptra Kitchen Area (One Time Encounter) (G2)",
      "Pot in Mt. Batten Pass (One Time Encounter) (G2)",
      "Pot in Knightmare Towers (One Time Encounter) (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/5/56/Urnexpected_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Pot in Stockenbarrel Item Shop Area (One Time Encounter) (G2)"
      },
      {
        "kind": "map",
        "id": "helmunaptra",
        "raw": "Pot in Helmunaptra Kitchen Area (One Time Encounter) (G2)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Pot in Mt. Batten Pass (One Time Encounter) (G2)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Pot in Knightmare Towers (One Time Encounter) (G2)"
      }
    ]
  },
  {
    "id": 60,
    "name": "Gourdzilla",
    "exp": "59",
    "gold": "30",
    "drop": "Thorn Whip",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Abovitall Tower (G2)",
      "Abovitall Tower (Grassy area outside of locked front door) (G3)",
      "Scary Lair (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/4f/Gourdzilla_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (G2/G3)"
      }
    ]
  },
  {
    "id": 61,
    "name": "Metal Slime Knight",
    "exp": "135",
    "gold": "31",
    "drop": "Iron Cuirass",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Lodestar Harbour Area (G2/G3)",
      "Hay Area (G2/G3)",
      "Area outside of Scary Lair (G2/G3)",
      "Scary Lair (G2/G3)",
      "Zoomingale Area (G2/G3)",
      "Pontoon Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b1/Metalslimeknight_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "lodestar_harbour",
        "raw": "Lodestar Harbour Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "hay",
        "raw": "Hay Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Area outside of Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Zoomingale Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "pontoon",
        "raw": "Pontoon Area (G2/G3)"
      }
    ]
  },
  {
    "id": 62,
    "name": "Restless Armour",
    "exp": "65",
    "gold": "35",
    "drop": "Restless Armour",
    "dropRate": "1/32",
    "recruitLevel": "10",
    "recruitRate": "1/64",
    "locations": [
      "Abovitall Tower (G2)",
      "Lodestar Harbour Area (G2/G3)",
      "Hay Area (G2/G3)",
      "Zoomingale Area (G2/G3)",
      "Pontoon Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/12/Restlessarmour_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "abovitall_tower",
        "raw": "Abovitall Tower (G2)"
      },
      {
        "kind": "map",
        "id": "lodestar_harbour",
        "raw": "Lodestar Harbour Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "hay",
        "raw": "Hay Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Zoomingale Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "pontoon",
        "raw": "Pontoon Area (G2/G3)"
      }
    ]
  },
  {
    "id": 63,
    "name": "Growlbear",
    "exp": "57",
    "gold": "45",
    "drop": "Iron Shield",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Lodestar Harbour Area (G2/G3)",
      "Hay Area (G2/G3)",
      "Area outside of Scary Lair (G2/G3)",
      "Zoomingale Area (G2/G3)",
      "Pontoon Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cd/Growlbear_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "lodestar_harbour",
        "raw": "Lodestar Harbour Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "hay",
        "raw": "Hay Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Area outside of Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Zoomingale Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "pontoon",
        "raw": "Pontoon Area (G2/G3)"
      }
    ]
  },
  {
    "id": 64,
    "name": "Mudraker",
    "exp": "60",
    "gold": "31",
    "drop": "Seed of Life",
    "dropRate": "1/64",
    "recruitLevel": "11",
    "recruitRate": "1/4",
    "locations": [
      "Scary Lair (G2/G3)",
      "Tunnel south of Zoomingale (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/bd/Mudraker_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Tunnel south of Zoomingale (G2/G3)"
      }
    ]
  },
  {
    "id": 65,
    "name": "Liquid Metal Slime",
    "exp": "10050",
    "gold": "10",
    "drop": "Mini Medal",
    "dropRate": "1/64",
    "recruitLevel": "20",
    "recruitRate": "1/256",
    "locations": [
      "Knick-Knackatory Area (G2/G3)",
      "Outer area of Center Continent (G2)",
      "Anywhere on Center Continent (G3)",
      "Gotha Pass (G2/G3)",
      "Riteof Passage (G2/G3)",
      "Knightmare Towers (G2/G3)",
      "Area outside of Ancient Ruins (G3)",
      "Mantleplace (G3)",
      "Area outside of Mt. Zugzwang (G3)",
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/6/61/Liquidmetalslime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G2/G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Outer area of Center Continent (G2)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "riteof_passage",
        "raw": "Riteof Passage (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 66,
    "name": "Pocus Poppet",
    "exp": "50",
    "gold": "120",
    "drop": "Seed of Resilience",
    "dropRate": "1/64",
    "recruitLevel": "10",
    "recruitRate": "1/16",
    "locations": [
      "Area outside of Scary Lair (G2/G3)",
      "Scary Lair (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/8c/Pocuspoppet_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Area outside of Scary Lair (G2/G3)"
      }
    ]
  },
  {
    "id": 67,
    "name": "Paralakeet",
    "exp": "65",
    "gold": "35",
    "drop": "Chimaera Wing",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Scary Lair (G2/G3)",
      "Scary Lair (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b1/Paralakeet_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Area outside of Scary Lair (G2/G3)"
      }
    ]
  },
  {
    "id": 68,
    "name": "Sasquash",
    "exp": "74",
    "gold": "42",
    "drop": "Seed of Strength",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Scary Lair (G2/G3)",
      "Scuttlebutt Area (G2)",
      "Scuttlebutt Area (North and South Areas) (G3)",
      "Stockenbarrel Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/e5/Sasquash_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (G2)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G3)"
      }
    ]
  },
  {
    "id": 69,
    "name": "Magic Marionette",
    "exp": "70",
    "gold": "30",
    "drop": "Dancer's Costume",
    "dropRate": "1/16",
    "recruitLevel": "12",
    "recruitRate": "1/32",
    "locations": [
      "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)",
      "Scuttlebutt Area (G2)",
      "Scuttlebutt Area (North and South Areas) (G3)",
      "Stockenbarrel Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/37/Magicmarionette_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (G2)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G3)"
      }
    ]
  },
  {
    "id": 70,
    "name": "Wisp-o'-smoke",
    "exp": "77",
    "gold": "17",
    "drop": "Magic Water",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Scary Lair (G2/G3)",
      "Scuttlebutt Area (G2)",
      "Scuttlebutt Area (North and South Areas) (G3)",
      "Tunnel south of Zoomingale (G2/G3)",
      "Stockenbarrel Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/32/Wisposmoke_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (G2)"
      },
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Tunnel south of Zoomingale (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G3)"
      }
    ]
  },
  {
    "id": 71,
    "name": "Pokesperson",
    "exp": "79",
    "gold": "42",
    "drop": "Iron Cuirass",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Scary Lair (G2/G3)",
      "Scuttlebutt Area (G2)",
      "Scuttlebutt Area (North and South Areas) (G3)",
      "Stockenbarrel Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/39/Pokesperson_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scary_lair",
        "raw": "Scary Lair (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (G2)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G3)"
      }
    ]
  },
  {
    "id": 72,
    "name": "Corpse Corporal",
    "exp": "85",
    "gold": "11",
    "drop": "Yggdrasil Leaf",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)",
      "Tunnel south of Zoomingale (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/1e/Corpsecorporal_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)"
      }
    ]
  },
  {
    "id": 73,
    "name": "Drooling Ghoul",
    "exp": "69",
    "gold": "22",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)",
      "Scuttlebutt Area (G2)",
      "Scuttlebutt Area (North and South Areas) (G3)",
      "Mostroferrato Area (G2/G3)",
      "Stockenbarrel Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/22/Droolingghoul_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (G2)"
      },
      {
        "kind": "map",
        "id": "mostroferrato",
        "raw": "Mostroferrato Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G2/G3)"
      }
    ]
  },
  {
    "id": 74,
    "name": "Gamigin",
    "exp": "101",
    "gold": "55",
    "drop": "Monster Munchies",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Magmageddon (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/3b/Gamigin_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Mt. Magmageddon (G2/G3)"
      }
    ]
  },
  {
    "id": 75,
    "name": "Great Sabrecat",
    "exp": "100",
    "gold": "45",
    "drop": "Iron Claw",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)",
      "Scuttlebutt Area (G2)",
      "Scuttlebutt Area (North and South Areas) (G3)",
      "Stockenbarrel Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d1/Greatsabrecat_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Area around Lunar Zoombloom (West of Zoomingale) (G2/G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (G2)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G3)"
      }
    ]
  },
  {
    "id": 76,
    "name": "Thaumaturge",
    "exp": "85",
    "gold": "43",
    "drop": "Holy Water",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Scuttlebutt Area (G2)",
      "Scuttlebutt Area (North and South Areas) (G3)",
      "Mostroferrato Area (G2/G3)",
      "Stockenbarrel Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cc/Thaumaturge_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (G2)"
      },
      {
        "kind": "map",
        "id": "mostroferrato",
        "raw": "Mostroferrato Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G2/G3)"
      }
    ]
  },
  {
    "id": 77,
    "name": "Hunter Mech",
    "exp": "140",
    "gold": "51",
    "drop": "Seed of Wisdom",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mostroferrato Area (G2/G3)",
      "Stockenbarrel Area (G2)",
      "Area outside of Mt. Magmageddon (G2)",
      "Area south of Mt. Magmageddon (By continent southern tip) (G3)",
      "Mt. Magmageddon (G2/G3)",
      "Mt. Batten Pass (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/65/Huntermech_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mostroferrato",
        "raw": "Mostroferrato Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G2)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G2)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      }
    ]
  },
  {
    "id": 78,
    "name": "Mimic",
    "exp": "210",
    "gold": "110",
    "drop": "Mini Medal",
    "dropRate": "1/1",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Gotha Pass (3x One Time Encounters) (G2)",
      "Knightmare Towers (2x One Time Encounters) (G2)",
      "Talon Tower (One Time Encounter) (G3)",
      "Mt. Zugzwang (One Time Encounter) (G3)",
      "Estark's Labyrinth (2x One Time Encounters) (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/6/63/Mimic_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (3x One Time Encounters) (G2)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (2x One Time Encounters) (G2)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (One Time Encounter) (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (One Time Encounter) (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (2x One Time Encounters) (G3+)"
      }
    ]
  },
  {
    "id": 79,
    "name": "Chimaera",
    "exp": "90",
    "gold": "45",
    "drop": "Chimaera Wing",
    "dropRate": "1/8",
    "recruitLevel": "15",
    "recruitRate": "1/16",
    "locations": [
      "Area outside of Mt. Magmageddon (G2)",
      "Area south of Mt. Magmageddon (By continent southern tip) (G3)",
      "Mt. Magmageddon (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/15/Chimaera_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G2)"
      }
    ]
  },
  {
    "id": 80,
    "name": "Wormbat",
    "exp": "80",
    "gold": "33",
    "drop": "Moonwort Bulb",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Tunnel south of Zoomingale (G2/G3)",
      "Mostroferrato Area (G2/G3)",
      "Stockenbarrel Area (G2)",
      "Mt. Magmageddon (G2/G3)",
      "Cataract Caves (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/ab/Wormbat_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "zoomingale",
        "raw": "Tunnel south of Zoomingale (G2/G3)"
      },
      {
        "kind": "map",
        "id": "mostroferrato",
        "raw": "Mostroferrato Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G2)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Mt. Magmageddon (G2/G3)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      }
    ]
  },
  {
    "id": 81,
    "name": "Poxtongue",
    "exp": "99",
    "gold": "35",
    "drop": "Musk",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mostroferrato Area (G2/G3)",
      "Stockenbarrel Area (G2)",
      "Area outside of Mt. Magmageddon (G2)",
      "Area south of Mt. Magmageddon (By continent southern tip) (G3)",
      "Cataract Caves (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/8a/Poxtongue_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mostroferrato",
        "raw": "Mostroferrato Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G2)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G2)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      }
    ]
  },
  {
    "id": 82,
    "name": "Phantaseyes",
    "exp": "115",
    "gold": "55",
    "drop": "Seed of Strength",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Mt. Magmageddon (G2)",
      "Area south of Mt. Magmageddon (By continent southern tip) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/0/0a/Phantaseyes_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G2)"
      }
    ]
  },
  {
    "id": 83,
    "name": "Rockbomb",
    "exp": "95",
    "gold": "27",
    "drop": "Rockbomb Shard",
    "dropRate": "1/32",
    "recruitLevel": "15",
    "recruitRate": "1/64",
    "locations": [
      "Area outside of Mt. Magmageddon (G2)",
      "Area south of Mt. Magmageddon (By continent southern tip) (G3)",
      "Mt. Magmageddon (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/ed/Rockbomb_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G2)"
      }
    ]
  },
  {
    "id": 84,
    "name": "Jiggery-pokerer",
    "exp": "105",
    "gold": "41",
    "drop": "Iron Cuirass",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mostroferrato Area (G2/G3)",
      "Stockenbarrel Area (G2)",
      "Area outside of Mt. Magmageddon (G2)",
      "Area south of Mt. Magmageddon (By continent southern tip) (G3)",
      "Mt. Magmageddon (G2/G3)",
      "Cataract Caves (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/45/Jiggery-pokerer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mostroferrato",
        "raw": "Mostroferrato Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G2)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G2)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      }
    ]
  },
  {
    "id": 85,
    "name": "Monster Tamer",
    "exp": "108",
    "gold": "53",
    "drop": "Thorn Whip",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mostroferrato Area (G2/G3)",
      "Stockenbarrel Area (G2)",
      "Area outside of Mt. Magmageddon (G2)",
      "Area south of Mt. Magmageddon (By continent southern tip) (G3)",
      "Mt. Magmageddon (G2/G3)",
      "Cataract Caves (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/31/Monstertamer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mostroferrato",
        "raw": "Mostroferrato Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stockenbarrel",
        "raw": "Stockenbarrel Area (G2)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G2)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      }
    ]
  },
  {
    "id": 86,
    "name": "Hotbog",
    "exp": "120",
    "gold": "31",
    "drop": "Seed of Resilience",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Magmageddon (G2/G3)",
      "Cataract Caves (G2/G3)",
      "Helmunaptra Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/c4/Hotbog_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Mt. Magmageddon (G2/G3)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      },
      {
        "kind": "map",
        "id": "helmunaptra",
        "raw": "Helmunaptra Area (G2/G3)"
      }
    ]
  },
  {
    "id": 87,
    "name": "Goodybag",
    "exp": "80",
    "gold": "200",
    "drop": "Prayer Ring",
    "dropRate": "1/128",
    "recruitLevel": "16",
    "recruitRate": "1/16",
    "locations": [
      "Mt. Magmageddon (G2/G3)",
      "Cataract Caves (G2/G3)",
      "Neverglade (G3)"
    ],
    "image": "https://dragon-quest.org/wiki/Special:FilePath/Goodybag_DQV_SNES.gif",
    "places": [
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Mt. Magmageddon (G2/G3)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Neverglade (G3)"
      }
    ]
  },
  {
    "id": 88,
    "name": "Cureslime",
    "exp": "70",
    "gold": "43",
    "drop": "Yggdrasil Leaf",
    "dropRate": "1/64",
    "recruitLevel": "16",
    "recruitRate": "1/64",
    "locations": [
      "Cataract Caves (G2/G3)",
      "Dominicus's Dominion Area (G2/G3)",
      "Helmunaptra Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/ee/Cureslime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      },
      {
        "kind": "map",
        "id": "dominicus_dominion",
        "raw": "Dominicus's Dominion Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "helmunaptra",
        "raw": "Helmunaptra Area (G2/G3)"
      }
    ]
  },
  {
    "id": 89,
    "name": "Gastank",
    "exp": "115",
    "gold": "40",
    "drop": "Antidotal Herb",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Cataract Caves (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/9f/Gastank_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      }
    ]
  },
  {
    "id": 90,
    "name": "Orc",
    "exp": "125",
    "gold": "55",
    "drop": "Fur Cape",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Cataract Caves (G2/G3)",
      "Helmunaptra Area (G2/G3)",
      "Mt. Batten Pass (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/13/Orc_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      },
      {
        "kind": "map",
        "id": "helmunaptra",
        "raw": "Helmunaptra Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      }
    ]
  },
  {
    "id": 91,
    "name": "King Slime",
    "exp": "200",
    "gold": "115",
    "drop": "Yggdrasil Leaf",
    "dropRate": "1/32",
    "recruitLevel": "18",
    "recruitRate": "1/64",
    "locations": [
      "Dominicus's Dominion Area (G2/G3)",
      "Helmunaptra Area (Wait for slimes to combine in battle) (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/0/0a/Kingslime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "dominicus_dominion",
        "raw": "Dominicus's Dominion Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "helmunaptra",
        "raw": "Helmunaptra Area (Wait for slimes to combine in battle) (G2/G3)"
      }
    ]
  },
  {
    "id": 92,
    "name": "Flamethrower",
    "exp": "130",
    "gold": "50",
    "drop": "Seed of Wisdom",
    "dropRate": "1/64",
    "recruitLevel": "16",
    "recruitRate": "1/64",
    "locations": [
      "Mt. Magmageddon (G2/G3)",
      "Helmunaptra Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d8/Flamethrower_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Mt. Magmageddon (G2/G3)"
      },
      {
        "kind": "map",
        "id": "helmunaptra",
        "raw": "Helmunaptra Area (G2/G3)"
      }
    ]
  },
  {
    "id": 93,
    "name": "Frighturn",
    "exp": "250",
    "gold": "158",
    "drop": "Mini Medal",
    "dropRate": "1/8",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Zugzwang (2x One Time Encounters) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/1b/Frighturn_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (2x One Time Encounters) (G3)"
      }
    ]
  },
  {
    "id": 94,
    "name": "Lazy Eye",
    "exp": "95",
    "gold": "33",
    "drop": "Seed of Life",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Helmunaptra Area (G2/G3)",
      "Knot Welcome Inne Area (G2/G3)",
      "Gotha Castle Area (G2/G3)",
      "Northminster Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/24/Lazyeye_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "helmunaptra",
        "raw": "Helmunaptra Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knot_welcome_inne",
        "raw": "Knot Welcome Inne Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Castle Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G3)"
      }
    ]
  },
  {
    "id": 95,
    "name": "Wizened Wizard",
    "exp": "123",
    "gold": "50",
    "drop": "Magic Water",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knot Welcome Inne Area (G2/G3)",
      "Mt. Batten Pass (G2/G3)",
      "Gotha Castle Area (G2/G3)",
      "Northminster Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6a/Wizenedwizard_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knot_welcome_inne",
        "raw": "Knot Welcome Inne Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Castle Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G3)"
      }
    ]
  },
  {
    "id": 96,
    "name": "Drag-goof",
    "exp": "127",
    "gold": "45",
    "drop": "Seed of Wisdom",
    "dropRate": "1/64",
    "recruitLevel": "18",
    "recruitRate": "1/16",
    "locations": [
      "Knot Welcome Inne Area (G2/G3)",
      "Mt. Batten Pass (G2/G3)",
      "Gotha Pass (G2/G3)",
      "Gotha Castle Area (G2/G3)",
      "Northminster Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/5c/Drag-goof_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knot_welcome_inne",
        "raw": "Knot Welcome Inne Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G3)"
      }
    ]
  },
  {
    "id": 97,
    "name": "Deadcurion",
    "exp": "106",
    "gold": "25",
    "drop": "Moonwort Bulb",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Batten Pass (G2/G3)",
      "Gotha Pass (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/75/Deadcurion_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      }
    ]
  },
  {
    "id": 98,
    "name": "Wight Prince",
    "exp": "158",
    "gold": "45",
    "drop": "Lightning Staff",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Batten Pass (G2/G3)",
      "Gotha Pass (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/96/Wightprince_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      }
    ]
  },
  {
    "id": 99,
    "name": "Lindworm",
    "exp": "98",
    "gold": "42",
    "drop": "Musk",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Batten Pass (G2/G3)",
      "Gotha Pass (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b4/Lindworm_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      }
    ]
  },
  {
    "id": 100,
    "name": "Minidemon",
    "exp": "120",
    "gold": "47",
    "drop": "Pot Lid",
    "dropRate": "1/16",
    "recruitLevel": "20",
    "recruitRate": "1/32",
    "locations": [
      "Gotha Pass (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/14/Minidemon_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 101,
    "name": "Eyevory Tusk-tusk",
    "exp": "145",
    "gold": "40",
    "drop": "Seed of Strength",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knot Welcome Inne Area (G2/G3)",
      "Gotha Castle Area (G2/G3)",
      "Northminster Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/3d/Eyevorytusk-tusk_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knot_welcome_inne",
        "raw": "Knot Welcome Inne Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Castle Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G2/G3)"
      }
    ]
  },
  {
    "id": 102,
    "name": "Stone Golem",
    "exp": "176",
    "gold": "65",
    "drop": "Dieamend",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Gotha Castle Area (G2/G3)",
      "Northminster Area (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/9b/Stonegolem_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Castle Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G2/G3)"
      }
    ]
  },
  {
    "id": 103,
    "name": "Quack Up",
    "exp": "135",
    "gold": "57",
    "drop": "Chimaera Wing",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Batten Pass (G2/G3)",
      "Gotha Pass (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/54/Quackup_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mt. Batten Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 104,
    "name": "Samigina",
    "exp": "155",
    "gold": "50",
    "drop": "Prayer Ring",
    "dropRate": "1/64",
    "recruitLevel": "20",
    "recruitRate": "1/32",
    "locations": [
      "Gotha Pass (G2/G3)",
      "Gotha Castle Area (G2/G3)",
      "Riteof Passage (G2/G3)",
      "Northminster Area (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/7c/Samigina_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "riteof_passage",
        "raw": "Riteof Passage (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 105,
    "name": "Hocus Chimaera",
    "exp": "171",
    "gold": "65",
    "drop": "Chimaera Wing",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Gotha Pass (G2/G3)",
      "Gotha Castle Area (G2/G3)",
      "Northminster Area (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/0/09/Hocuschimaer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 106,
    "name": "Toxtongue",
    "exp": "180",
    "gold": "35",
    "drop": "Seed of Wisdom",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Gotha Pass (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b4/Toxtongue_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Pass (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 107,
    "name": "Admirer",
    "exp": "550",
    "gold": "85",
    "drop": "Mini Medal",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Riteof Passage (G2/G3)",
      "Stairway to Zenithia (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/83/Admirer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "riteof_passage",
        "raw": "Riteof Passage (G2/G3)"
      },
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 108,
    "name": "Hex Hellmet",
    "exp": "210",
    "gold": "40",
    "drop": "Iron Mask",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Gotha Castle Area (G2/G3)",
      "Riteof Passage (G2/G3)",
      "Northminster Area (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/0/07/Hexhellmet_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Castle Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "riteof_passage",
        "raw": "Riteof Passage (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 109,
    "name": "Orc King",
    "exp": "205",
    "gold": "65",
    "drop": "Fur Cape",
    "dropRate": "1/16",
    "recruitLevel": "21",
    "recruitRate": "1/4",
    "locations": [
      "Gotha Castle Area (G2/G3)",
      "Riteof Passage (G2/G3)",
      "Northminster Area (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/76/Orcking_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "gotha",
        "raw": "Gotha Castle Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "riteof_passage",
        "raw": "Riteof Passage (G2/G3)"
      },
      {
        "kind": "map",
        "id": "northminster",
        "raw": "Northminster Area (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 110,
    "name": "Gasbag",
    "exp": "190",
    "gold": "55",
    "drop": "Antidotal Herb",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Riteof Passage (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b5/Gasbag_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "riteof_passage",
        "raw": "Riteof Passage (G2/G3)"
      }
    ]
  },
  {
    "id": 111,
    "name": "Hippoblockomus",
    "exp": "202",
    "gold": "60",
    "drop": "Iron Shield",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d8/Hippoblockomus_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 112,
    "name": "Hawk Man",
    "exp": "185",
    "gold": "51",
    "drop": "Steel Broadsword",
    "dropRate": "1/32",
    "recruitLevel": "23",
    "recruitRate": "1/32",
    "locations": [
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/c4/Hawkman_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 113,
    "name": "Hula Ghoul",
    "exp": "225",
    "gold": "45",
    "drop": "Dancer's Costume",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Riteof Passage (G2/G3)",
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/62/Hulaghoul_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "riteof_passage",
        "raw": "Riteof Passage (G2/G3)"
      },
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 114,
    "name": "Hellion",
    "exp": "240",
    "gold": "70",
    "drop": "Iron Claw",
    "dropRate": "1/16",
    "recruitLevel": "23",
    "recruitRate": "1/32",
    "locations": [
      "Knightmare Towers (G2/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/38/Hellion_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      }
    ]
  },
  {
    "id": 115,
    "name": "Jowler",
    "exp": "183",
    "gold": "37",
    "drop": "Seed of Agility",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knick-Knackatory Area (G2)",
      "Outer area of Center Continent (G2)",
      "Area outside of Ancient Ruins (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/73/Jowler_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G2)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Outer area of Center Continent (G2)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G3)"
      }
    ]
  },
  {
    "id": 116,
    "name": "Hoodlum",
    "exp": "195",
    "gold": "54",
    "drop": "Stone Axe",
    "dropRate": "1/16",
    "recruitLevel": "25",
    "recruitRate": "1/16",
    "locations": [
      "Knick-Knackatory Area (G2)",
      "Outer area of Center Continent (G2)",
      "Area outside of Ancient Ruins (G3)",
      "Stairway to Zenithia (G3)",
      "Area outside of Diggery Pokery (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/ae/Hoodlum_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G2)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Outer area of Center Continent (G2)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G3)"
      },
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      },
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Area outside of Diggery Pokery (G3)"
      }
    ]
  },
  {
    "id": 117,
    "name": "Air Duckt",
    "exp": "217",
    "gold": "60",
    "drop": "Cherub Chime",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knightmare Towers (G2/G3)",
      "Moot Point Area (G3)",
      "Stairway to Zenithia (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/4f/Airduckt_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knightmare_towers",
        "raw": "Knightmare Towers (G2/G3)"
      },
      {
        "kind": "map",
        "id": "moot_point",
        "raw": "Moot Point Area (G3)"
      },
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      }
    ]
  },
  {
    "id": 118,
    "name": "Tortoceratops",
    "exp": "225",
    "gold": "45",
    "drop": "Seed of Strength",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knick-Knackatory Area (G2)",
      "Outer area of Center Continent (G2)",
      "Area outside of Ancient Ruins (G3)",
      "Area outside of Diggery Pokery (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/f/fa/Tortoceratops_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G2)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Outer area of Center Continent (G2)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G3)"
      },
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Area outside of Diggery Pokery (G3)"
      }
    ]
  },
  {
    "id": 119,
    "name": "Pink Elephant",
    "exp": "264",
    "gold": "70",
    "drop": "Seed of Life",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/thumb/b/bd/Pinkelephant_DQV_PS2.png/300px-Pinkelephant_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      }
    ]
  },
  {
    "id": 120,
    "name": "Drag-goon",
    "exp": "245",
    "gold": "63",
    "drop": "Paxa Punch",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knick-Knackatory Area (G2)",
      "Outer area of Center Continent (G2)",
      "Area outside of Ancient Ruins (G3)",
      "Area outside of Diggery Pokery (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/db/Drag-goon_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G2)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Outer area of Center Continent (G2)"
      },
      {
        "kind": "map",
        "id": "ancient_ruins",
        "raw": "Area outside of Ancient Ruins (G3)"
      },
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Area outside of Diggery Pokery (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 121,
    "name": "Hypothermion",
    "exp": "252",
    "gold": "60",
    "drop": "Seed of Magic",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Anywhere on Lofty Peak Continent (G3)",
      "Stairway to Zenithia (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/20/Hypothermion_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "lofty_peak",
        "raw": "Anywhere on Lofty Peak Continent (G3)"
      },
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      }
    ]
  },
  {
    "id": 122,
    "name": "Muddy Hand",
    "exp": "110",
    "gold": "35",
    "drop": "Chimaera Wing",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/28/Muddyhand_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 123,
    "name": "Golem",
    "exp": "330",
    "gold": "90",
    "drop": "Seed of Strength",
    "dropRate": "1/64",
    "recruitLevel": "25",
    "recruitRate": "1/4",
    "locations": [
      "Anywhere on Lofty Peak Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/a8/Golem_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "lofty_peak",
        "raw": "Anywhere on Lofty Peak Continent (G3)"
      }
    ]
  },
  {
    "id": 124,
    "name": "Mandrake Major",
    "exp": "215",
    "gold": "65",
    "drop": "Saw Blade",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Anywhere on Lofty Peak Continent (G3)",
      "Stairway to Zenithia (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cd/Mandrakemajor_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "lofty_peak",
        "raw": "Anywhere on Lofty Peak Continent (G3)"
      },
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 125,
    "name": "Firebird",
    "exp": "238",
    "gold": "63",
    "drop": "Somatic Staff",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Moot Point Area (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/da/Firebird_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "moot_point",
        "raw": "Moot Point Area (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 126,
    "name": "Revaulting Horse",
    "exp": "270",
    "gold": "75",
    "drop": "Magic Water",
    "dropRate": "1/32",
    "recruitLevel": "27",
    "recruitRate": "1/16",
    "locations": [
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/f/f8/Revaultinghorse_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      }
    ]
  },
  {
    "id": 127,
    "name": "Blizzybody",
    "exp": "290",
    "gold": "60",
    "drop": "Top Hat",
    "dropRate": "1/32",
    "recruitLevel": "26",
    "recruitRate": "1/64",
    "locations": [
      "Waterway in Estuary Sanctuary (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b0/Blizzybody_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "estuary_sanctuary",
        "raw": "Waterway in Estuary Sanctuary (G3)"
      }
    ]
  },
  {
    "id": 128,
    "name": "Stenchurion",
    "exp": "282",
    "gold": "40",
    "drop": "Blood Mail",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Waterway in Estuary Sanctuary (G3)",
      "Diggery Pokery (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6d/Stenchurion_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "estuary_sanctuary",
        "raw": "Waterway in Estuary Sanctuary (G3)"
      },
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Diggery Pokery (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 129,
    "name": "Necromancer",
    "exp": "325",
    "gold": "90",
    "drop": "Prayer Ring",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)",
      "Waterway in Estuary Sanctuary (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/86/Necromancer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      },
      {
        "kind": "map",
        "id": "estuary_sanctuary",
        "raw": "Waterway in Estuary Sanctuary (G3)"
      }
    ]
  },
  {
    "id": 130,
    "name": "King Cureslime",
    "exp": "380",
    "gold": "100",
    "drop": "Rebirth Stone",
    "dropRate": "1/128",
    "recruitLevel": "28",
    "recruitRate": "1/64",
    "locations": [
      "Stairway to Zenithia (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/5/52/Kingcureslime_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      }
    ]
  },
  {
    "id": 131,
    "name": "Red-hot Poker",
    "exp": "270",
    "gold": "63",
    "drop": "Iron Cuirass",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)",
      "Stairway to Zenithia (G3)"
    ],
    "image": null,
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      },
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      }
    ]
  },
  {
    "id": 132,
    "name": "Hippopotamiss",
    "exp": "295",
    "gold": "80",
    "drop": "Iron Shield",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Stairway to Zenithia (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/29/Hippopotamiss_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      }
    ]
  },
  {
    "id": 133,
    "name": "Gargoyle",
    "exp": "290",
    "gold": "85",
    "drop": "Serpent Sword",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Stairway to Zenithia (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/45/Gargoyle_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 134,
    "name": "Warhog",
    "exp": "335",
    "gold": "90",
    "drop": "Battle-axe",
    "dropRate": "1/64",
    "recruitLevel": "28",
    "recruitRate": "1/32",
    "locations": [
      "Stairway to Zenithia (G3)",
      "Diggery Pokery (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/f/f1/Warhog_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "stairway_to_zenithia",
        "raw": "Stairway to Zenithia (G3)"
      },
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Diggery Pokery (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 135,
    "name": "Hades Helm",
    "exp": "294",
    "gold": "95",
    "drop": "Hades' Helm",
    "dropRate": "1/64",
    "recruitLevel": "29",
    "recruitRate": "1/64",
    "locations": [
      "Diggery Pokery (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/wiki/Special:FilePath/DQV_Hades_Helm.png",
    "places": [
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Diggery Pokery (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 136,
    "name": "Prowler Jowler",
    "exp": "310",
    "gold": "65",
    "drop": "Seed of Agility",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Diggery Pokery (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/e3/Prowlerjowler_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Diggery Pokery (G3)"
      }
    ]
  },
  {
    "id": 137,
    "name": "Hyperpyrexion",
    "exp": "401",
    "gold": "110",
    "drop": "Faerie Foil",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Diggery Pokery (G3)",
      "Area outside of Neverglade (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/46/Hyperpyrexion_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Diggery Pokery (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 138,
    "name": "Terrorceratops",
    "exp": "376",
    "gold": "95",
    "drop": "Seed of Resilience",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Diggery Pokery (G3)",
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/9b/Terrorceratops_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Diggery Pokery (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 139,
    "name": "Mandrake Marauder",
    "exp": "380",
    "gold": "81",
    "drop": "Steel Broadsword",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Diggery Pokery (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/bb/Mandrakemarauder_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "diggery_pokery",
        "raw": "Diggery Pokery (G3)"
      }
    ]
  },
  {
    "id": 140,
    "name": "Silvapithecus",
    "exp": "403",
    "gold": "100",
    "drop": "Elfin Elixir",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (North Area) (G3)",
      "Area outside of Uptaten Towers (East Area) (G3)",
      "Coburg Castle Area (West Area) (G3)",
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Area outside of Neverglade (G3)",
      "Area outside of Mantleplace (G3)",
      "Mantleplace (G3)",
      "Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/4f/Silvapithecus_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (North Area) (G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (West Area) (G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Area outside of Mantleplace (G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 141,
    "name": "Pummel Horse",
    "exp": "350",
    "gold": "68",
    "drop": "Monster Munchies",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Area outside of Neverglade (G3)",
      "Neverglade (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/45/Pummelhorse_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      }
    ]
  },
  {
    "id": 142,
    "name": "Dragon Zombie",
    "exp": "450",
    "gold": "55",
    "drop": "Ruinous Shield",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (North Area) (G3)",
      "Area outside of Uptaten Towers (East Area) (G3)",
      "Coburg Castle Area (West Area) (G3)",
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Area outside of Neverglade (G3)",
      "Area outside of Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/c4/Dragonzombie_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (North Area) (G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (West Area) (G3)"
      },
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Area outside of Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 143,
    "name": "Bomboulder",
    "exp": "340",
    "gold": "70",
    "drop": "Dieamend",
    "dropRate": "1/64",
    "recruitLevel": "30",
    "recruitRate": "1/256",
    "locations": [
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Area outside of Neverglade (G3)",
      "Neverglade (G3)",
      "Talon Tower (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6b/Bomboulder_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 144,
    "name": "Metal King Slime",
    "exp": "30010",
    "gold": "15",
    "drop": "Mini Medal",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/a/a2/Metalkingslime_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 145,
    "name": "Quadrahead",
    "exp": "390",
    "gold": "112",
    "drop": "Seed of Magic",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Neverglade (G3)",
      "Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/2b/Quadrahead_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Neverglade (G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 146,
    "name": "Moosifer",
    "exp": "410",
    "gold": "120",
    "drop": "Devil Armour",
    "dropRate": "1/32",
    "recruitLevel": "30",
    "recruitRate": "1/4",
    "locations": [
      "Neverglade (G3)",
      "Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/79/Moosifer_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Neverglade (G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 147,
    "name": "Snake Ch-arm-er",
    "exp": "370",
    "gold": "82",
    "drop": "Serpent Sword",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (North Area) (G3)",
      "Area outside of Uptaten Towers (East Area) (G3)",
      "Coburg Castle Area (West Area) (G3)",
      "Area outside of Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/8e/Snakech-arm-er_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (North Area) (G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (West Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Area outside of Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 148,
    "name": "Thwarthog",
    "exp": "393",
    "gold": "109",
    "drop": "Chain Mail",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (North Area) (G3)",
      "Area outside of Uptaten Towers (East Area) (G3)",
      "Coburg Castle Area (West Area) (G3)",
      "Area outside of Mantleplace (G3)",
      "Talon Tower (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b9/Thwarthog_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (North Area) (G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (West Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Area outside of Mantleplace (G3)"
      },
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      }
    ]
  },
  {
    "id": 149,
    "name": "Orobas",
    "exp": "410",
    "gold": "98",
    "drop": "Yggdrasil Leaf",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Whealbrook Area (North Area) (G3)",
      "Area outside of Uptaten Towers (East Area) (G3)",
      "Coburg Castle Area (West Area) (G3)",
      "Area outside of Mantleplace (G3)",
      "Mantleplace (G3)",
      "Crocodilopolis (Korol Pre-Death) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/b6/Orobas_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (North Area) (G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (West Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Area outside of Mantleplace (G3)"
      },
      {
        "kind": "map",
        "id": "crocodilopolis",
        "raw": "Crocodilopolis (Korol Pre-Death) (G3)"
      }
    ]
  },
  {
    "id": 150,
    "name": "Snowbird",
    "exp": "445",
    "gold": "90",
    "drop": "Hermes' Hat",
    "dropRate": "1/128",
    "recruitLevel": "34",
    "recruitRate": "1/32",
    "locations": [
      "Whealbrook Area (North Area) (G3)",
      "Area outside of Uptaten Towers (East Area) (G3)",
      "Coburg Castle Area (West Area) (G3)",
      "Area outside of Mantleplace (G3)",
      "Precaria Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d8/Snowbird_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "whealbrook",
        "raw": "Whealbrook Area (North Area) (G3)"
      },
      {
        "kind": "map",
        "id": "uptaten_towers",
        "raw": "Area outside of Uptaten Towers (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "coburg",
        "raw": "Coburg Castle Area (West Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Area outside of Mantleplace (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Precaria Area (G3)"
      }
    ]
  },
  {
    "id": 151,
    "name": "Black Dragon",
    "exp": "630",
    "gold": "125",
    "drop": "Seed of Strength",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Talon Tower (G3)",
      "Crocodilopolis (Korol Pre-Death) (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d8/Blackdragon_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      },
      {
        "kind": "map",
        "id": "crocodilopolis",
        "raw": "Crocodilopolis (Korol Pre-Death) (G3)"
      }
    ]
  },
  {
    "id": 152,
    "name": "Tyrannoceratops",
    "exp": "470",
    "gold": "80",
    "drop": "Seed of Resilience",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/0/01/Tyrannoceratops_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 153,
    "name": "Balhib",
    "exp": "130",
    "gold": "1023",
    "drop": "Hela Hammer",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Talon Tower (G3)",
      "Precaria Area (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/de/Balhib_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Precaria Area (G3)"
      }
    ]
  },
  {
    "id": 154,
    "name": "Metal Dragon",
    "exp": "610",
    "gold": "93",
    "drop": "Metal King Armour",
    "dropRate": "1/256",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Talon Tower (G3)",
      "Crocodilopolis (Korol Pre-Death) (G3)",
      "Precaria Area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/74/Metaldragon_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      },
      {
        "kind": "map",
        "id": "crocodilopolis",
        "raw": "Crocodilopolis (Korol Pre-Death) (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Precaria Area (G3)"
      }
    ]
  },
  {
    "id": 155,
    "name": "Wrecktor",
    "exp": "550",
    "gold": "117",
    "drop": "Mini Medal",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Crocodilopolis (Korol Pre-Death) (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/wiki/Special:FilePath/Wrecktor_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "crocodilopolis",
        "raw": "Crocodilopolis (Korol Pre-Death) (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 156,
    "name": "Mandrake Marshal",
    "exp": "490",
    "gold": "98",
    "drop": "Steel Broadsword",
    "dropRate": "1/32",
    "recruitLevel": "32",
    "recruitRate": "1/32",
    "locations": [
      "Talon Tower (G3)",
      "Crocodilopolis (Korol Pre-Death) (G3)",
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/f/fd/Mandrakemarshal_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "talon_tower",
        "raw": "Talon Tower (G3)"
      },
      {
        "kind": "map",
        "id": "crocodilopolis",
        "raw": "Crocodilopolis (Korol Pre-Death) (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 157,
    "name": "Beastmaster",
    "exp": "400",
    "gold": "110",
    "drop": "Devil Armour",
    "dropRate": "1/64",
    "recruitLevel": "30",
    "recruitRate": "1/4",
    "locations": [
      "Mantleplace (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/4e/Beastmaster_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 158,
    "name": "Fire-eater",
    "exp": "370",
    "gold": "80",
    "drop": "Moonwort Bulb",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cc/Fire-eater_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 159,
    "name": "Ice-breaker",
    "exp": "310",
    "gold": "74",
    "drop": "Fire Claw",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/e3/Ice-breaker_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 160,
    "name": "Luneyetic",
    "exp": "380",
    "gold": "82",
    "drop": "Thinking Cap",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mantleplace (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/bc/Luneyetic_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 161,
    "name": "Archdemon",
    "exp": "927",
    "gold": "85",
    "drop": "Rockbomb Shard",
    "dropRate": "1/32",
    "recruitLevel": "30",
    "recruitRate": "1/64",
    "locations": [
      "Mantleplace (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/3a/Archdemon_DQV_DS.png",
    "places": [
      {
        "kind": "map",
        "id": "mantleplace",
        "raw": "Mantleplace (G3)"
      }
    ]
  },
  {
    "id": 162,
    "name": "Soulspawn",
    "exp": "551",
    "gold": "53",
    "drop": "Elfin Elixir",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Crocodilopolis (Korol Pre-Death) (G3)",
      "Area outside of Mt. Zugzwang (G3)",
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/8/83/Soulspawn_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "crocodilopolis",
        "raw": "Crocodilopolis (Korol Pre-Death) (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 163,
    "name": "Great Dragon",
    "exp": "810",
    "gold": "158",
    "drop": "Rebirth Stone",
    "dropRate": "1/128",
    "recruitLevel": "34",
    "recruitRate": "1/64",
    "locations": [
      "Precaria Area (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/1/10/Greatdragon_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Precaria Area (G3)"
      }
    ]
  },
  {
    "id": 164,
    "name": "Snake Handler",
    "exp": "640",
    "gold": "110",
    "drop": "Legerdemantle",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Crocodilopolis (Korol Pre-Death) (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/69/Snakehandler_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "crocodilopolis",
        "raw": "Crocodilopolis (Korol Pre-Death) (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 165,
    "name": "Killing Machine",
    "exp": "633",
    "gold": "74",
    "drop": "Spiked Armour",
    "dropRate": "1/32",
    "recruitLevel": "34",
    "recruitRate": "1/256",
    "locations": [
      "Precaria Area (G3)",
      "Area outside of Mt. Zugzwang (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/71/Killingmachine_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Precaria Area (G3)"
      }
    ]
  },
  {
    "id": 166,
    "name": "Pazuzu",
    "exp": "610",
    "gold": "112",
    "drop": "Kamikazee Bracer",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Precaria Area (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/ed/Pazuzu_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Precaria Area (G3)"
      }
    ]
  },
  {
    "id": 167,
    "name": "Hybird",
    "exp": "575",
    "gold": "90",
    "drop": "Hermes' Hat",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Mt. Zugzwang (G3)",
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/bd/Hybird_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 168,
    "name": "Hyperanemon",
    "exp": "580",
    "gold": "124",
    "drop": "Dark Shield",
    "dropRate": "1/32",
    "recruitLevel": "41",
    "recruitRate": "1/64",
    "locations": [
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cf/Hyperanemon_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 169,
    "name": "Wyrtoise",
    "exp": "590",
    "gold": "140",
    "drop": "Magic Water",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Area outside of Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/1/1c/Wyrtoise_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 170,
    "name": "Gigantes",
    "exp": "570",
    "gold": "70",
    "drop": "Seed of Strength",
    "dropRate": "1/64",
    "recruitLevel": "34",
    "recruitRate": "1/32",
    "locations": [
      "Area outside of Mt. Zugzwang (G3)",
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/5/5a/Gigantes_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 171,
    "name": "Lick-o'-flame",
    "exp": "550",
    "gold": "95",
    "drop": "Seed of Life",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/b/ba/Lick-o-flame_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 172,
    "name": "Drakenstein",
    "exp": "670",
    "gold": "53",
    "drop": "Poison Needle",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Zugzwang (G3)",
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/c/cf/Drakenstein_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      },
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 173,
    "name": "Deathsquad",
    "exp": "519",
    "gold": "80",
    "drop": "Rockbomb Shard",
    "dropRate": "1/16",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d2/Deathsquad_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 174,
    "name": "Wight King",
    "exp": "777",
    "gold": "5",
    "drop": "Staff of Antimagic",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/wiki/Special:FilePath/Wightking_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 175,
    "name": "Doom Slugger",
    "exp": "510",
    "gold": "63",
    "drop": "Cobra Claw",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/7c/Doomslugger_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 176,
    "name": "Gloom Slugger",
    "exp": "570",
    "gold": "57",
    "drop": "Cobra Claw",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Mt. Zugzwang (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/a/ad/Gloomslugger_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Mt. Zugzwang (G3)"
      }
    ]
  },
  {
    "id": 177,
    "name": "Mechan-o'-wyrm",
    "exp": "978",
    "gold": "160",
    "drop": "Orichalcum Fangs",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/d/d5/Mechanowyrm_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 178,
    "name": "Barbatos",
    "exp": "1165",
    "gold": "215",
    "drop": "Hell Sabre",
    "dropRate": "1/64",
    "recruitLevel": "41",
    "recruitRate": "1/256",
    "locations": [
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/2/23/Barbatos_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 179,
    "name": "Bilhaw",
    "exp": "1275",
    "gold": "300",
    "drop": "Ogre Shield",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Estark's Labyrinth (G3+)"
    ],
    "image": "https://dragon-quest.org/w/images/7/7d/Bilhaw_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "estark",
        "raw": "Estark's Labyrinth (G3+)"
      }
    ]
  },
  {
    "id": 180,
    "name": "Pollywiggle",
    "exp": "80",
    "gold": "30",
    "drop": "Medicinal Herb",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All water area from Mostroferrato to Cataract Caves (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/6/64/Pollywiggle_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area from Mostroferrato to Cataract Caves (G2)"
      }
    ]
  },
  {
    "id": 181,
    "name": "Man o' War",
    "exp": "77",
    "gold": "22",
    "drop": "Moonwort Bulb",
    "dropRate": "1/32",
    "recruitLevel": "18",
    "recruitRate": "1/2",
    "locations": [
      "All water area surrounding Center Continent (G2)",
      "Waterway in Estuary Sanctuary (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/ef/Man_o%27_war_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area surrounding Center Continent (G2)"
      },
      {
        "kind": "map",
        "id": "estuary_sanctuary",
        "raw": "Waterway in Estuary Sanctuary (G3)"
      }
    ]
  },
  {
    "id": 182,
    "name": "Morphean Mollusc",
    "exp": "110",
    "gold": "47",
    "drop": "Seed of Resilience",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All water area from Mostroferrato to Cataract Caves (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/c/c2/Morpheanmollusc_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area from Mostroferrato to Cataract Caves (G2)"
      }
    ]
  },
  {
    "id": 183,
    "name": "Suckling Ocker",
    "exp": "95",
    "gold": "37",
    "drop": "Dancer's Costume",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All water area from Mostroferrato to Cataract Caves (G2)",
      "Cataract Caves (G2/G3)",
      "All outer water area of the World Map (G3)",
      "Water area surrounding the north half of Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/9/97/Sucklingocker_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area from Mostroferrato to Cataract Caves (G2)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      }
    ]
  },
  {
    "id": 184,
    "name": "Merman",
    "exp": "105",
    "gold": "45",
    "drop": "Iron Claw",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All water area from Mostroferrato to Cataract Caves (G2)",
      "Cataract Caves (G2/G3)",
      "All water area surrounding Center Continent (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/7/77/Merman_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area from Mostroferrato to Cataract Caves (G2)"
      },
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      }
    ]
  },
  {
    "id": 185,
    "name": "Pollywaggle",
    "exp": "99",
    "gold": "29",
    "drop": "Chimaera Wing",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Cataract Caves (G2/G3)",
      "All outer water area of the World Map (G3)",
      "Water area surrounding the north half of Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/71/Pollywaggle_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "cataract_caves",
        "raw": "Cataract Caves (G2/G3)"
      },
      {
        "kind": "region",
        "id": "sea",
        "raw": "All outer water area of the World Map (G3)"
      }
    ]
  },
  {
    "id": 186,
    "name": "Sea Dog",
    "exp": "113",
    "gold": "45",
    "drop": "Saw Blade",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All water area from Mostroferrato to Cataract Caves (G2)",
      "All outer water area of the World Map (G3)",
      "Water area surrounding the north half of Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/25/Seadog_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area from Mostroferrato to Cataract Caves (G2)"
      }
    ]
  },
  {
    "id": 187,
    "name": "Cross Bones",
    "exp": "200",
    "gold": "100",
    "drop": "Top Hat",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All water area surrounding Center Continent (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/4/46/Crossbones_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area surrounding Center Continent (G2)"
      }
    ]
  },
  {
    "id": 188,
    "name": "Wallop Scallop",
    "exp": "120",
    "gold": "43",
    "drop": "Seed of Resilience",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All outer water area of the World Map (G3)",
      "Water area surrounding the north half of Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/3a/Wallopscallop_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All outer water area of the World Map (G3)"
      }
    ]
  },
  {
    "id": 189,
    "name": "Mother Ocker",
    "exp": "125",
    "gold": "53",
    "drop": "Monster Munchies",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Water area very close to south half of Center Continent (G3)",
      "Waterway in Estuary Sanctuary (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/8e/Motherocker_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "Water area very close to south half of Center Continent (G3)"
      },
      {
        "kind": "map",
        "id": "estuary_sanctuary",
        "raw": "Waterway in Estuary Sanctuary (G3)"
      }
    ]
  },
  {
    "id": 190,
    "name": "Thaumatosaurus",
    "exp": "210",
    "gold": "59",
    "drop": "Seed of Life",
    "dropRate": "1/64",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All water area surrounding Center Continent (G2)"
    ],
    "image": "https://dragon-quest.org/w/images/f/fe/Thaumatosaurus_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All water area surrounding Center Continent (G2)"
      }
    ]
  },
  {
    "id": 191,
    "name": "Old Man of the Sea",
    "exp": "230",
    "gold": "110",
    "drop": "Shellmet",
    "dropRate": "1/16",
    "recruitLevel": "25",
    "recruitRate": "1/32",
    "locations": [
      "All World Map water area (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/e0/Oldmanofthesea_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All World Map water area (G3)"
      }
    ]
  },
  {
    "id": 192,
    "name": "Merking",
    "exp": "170",
    "gold": "90",
    "drop": "Seed of Strength",
    "dropRate": "1/128",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All outer water area of the World Map (G3)",
      "Water area surrounding the north half of Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/8d/Merking_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All outer water area of the World Map (G3)"
      }
    ]
  },
  {
    "id": 193,
    "name": "Poltarrrgeist",
    "exp": "350",
    "gold": "85",
    "drop": "Zombie Mail",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "All outer water area of the World Map (G3)",
      "Water area very close to south half of Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/4/47/Poltarrrgeist_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "All outer water area of the World Map (G3)"
      }
    ]
  },
  {
    "id": 194,
    "name": "Strongylokrotaphus",
    "exp": "400",
    "gold": "125",
    "drop": "Faerie Foil",
    "dropRate": "1/32",
    "recruitLevel": null,
    "recruitRate": null,
    "locations": [
      "Water area very close to south half of Center Continent (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/8/89/Strongylokrotaphus_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "sea",
        "raw": "Water area very close to south half of Center Continent (G3)"
      }
    ]
  },
  {
    "id": 195,
    "name": "Pip Fighter",
    "exp": "25",
    "gold": "25",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Anywhere on Faerie Land Overworld (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/2/2e/Pipfighter_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Anywhere on Faerie Land Overworld (G1/G3)"
      }
    ]
  },
  {
    "id": 196,
    "name": "Battle Pip",
    "exp": "24",
    "gold": "9",
    "drop": "Antidotal Herb",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Anywhere on Faerie Land Overworld (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/6d/Battlepip_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Anywhere on Faerie Land Overworld (G1/G3)"
      }
    ]
  },
  {
    "id": 197,
    "name": "Epipany",
    "exp": "22",
    "gold": "12",
    "drop": "Holy Water",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Anywhere on Faerie Land Overworld (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/37/Epipany_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Anywhere on Faerie Land Overworld (G1/G3)"
      }
    ]
  },
  {
    "id": 198,
    "name": "Wiz Pip",
    "exp": "23",
    "gold": "18",
    "drop": "T'n'T Ticket",
    "dropRate": "1/16",
    "recruitLevel": "7",
    "recruitRate": "1/16",
    "locations": [
      "Anywhere on Faerie Land Overworld (G1/G3)"
    ],
    "image": "https://dragon-quest.org/w/images/d/dd/Wizpip_DQV_PS2.png",
    "places": [
      {
        "kind": "region",
        "id": "faerie",
        "raw": "Anywhere on Faerie Land Overworld (G1/G3)"
      }
    ]
  },
  {
    "id": 199,
    "name": "Conkuistador",
    "exp": "72",
    "gold": "50",
    "drop": "Yggdrasil Dew",
    "dropRate": "1/64",
    "recruitLevel": "27",
    "recruitRate": "1/32",
    "locations": [
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)",
      "Area outside of Neverglade (G3)",
      "Neverglade (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/3/3d/Conkuistador_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      }
    ]
  },
  {
    "id": 200,
    "name": "Conkerer",
    "exp": "70",
    "gold": "32",
    "drop": "Medicinal Herb",
    "dropRate": "1/16",
    "recruitLevel": "27",
    "recruitRate": "1/32",
    "locations": [
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)",
      "Neverglade (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/7/71/Conkerer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Neverglade (G3)"
      }
    ]
  },
  {
    "id": 201,
    "name": "Conkuisitor",
    "exp": "75",
    "gold": "33",
    "drop": "Yggdrasil Leaf",
    "dropRate": "1/64",
    "recruitLevel": "27",
    "recruitRate": "1/32",
    "locations": [
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)",
      "Area outside of Neverglade (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/6/67/Conkuisitor_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      }
    ]
  },
  {
    "id": 202,
    "name": "Conkjurer",
    "exp": "68",
    "gold": "40",
    "drop": "T'n'T Ticket",
    "dropRate": "1/32",
    "recruitLevel": "27",
    "recruitRate": "1/32",
    "locations": [
      "Scuttlebutt Area (East Area) (G3)",
      "Area outside of Mt. Magmageddon (G3)",
      "Knick-Knackatory Area (G3)",
      "Anywhere on Center Continent (G3)",
      "Area outside of Neverglade (G3)"
    ],
    "image": "https://dragon-quest.org/w/images/e/e4/Conkjurer_DQV_PS2.png",
    "places": [
      {
        "kind": "map",
        "id": "scuttlebutt",
        "raw": "Scuttlebutt Area (East Area) (G3)"
      },
      {
        "kind": "map",
        "id": "mount_magmageddon",
        "raw": "Area outside of Mt. Magmageddon (G3)"
      },
      {
        "kind": "map",
        "id": "knick_knackatory",
        "raw": "Knick-Knackatory Area (G3)"
      },
      {
        "kind": "region",
        "id": "central_overworld",
        "raw": "Anywhere on Center Continent (G3)"
      },
      {
        "kind": "region",
        "id": "nadiria",
        "raw": "Area outside of Neverglade (G3)"
      }
    ]
  }
];

  export const TYPE_COLORS: Record<LocationType, string> = {
    town: "#f59e0b",
    castle: "#fb923c",
    tower: "#60a5fa",
    cave: "#94a3b8",
    shrine: "#34d399",
    other: "#a78bfa",
  };

  export const TYPE_LABELS: Record<LocationType, string> = {
    town: "Vila",
    castle: "Castelo",
    tower: "Torre",
    cave: "Caverna",
    shrine: "Templo",
    other: "Outro",
  };

  // Build helpers: location id → monster list, region id → monster list
  export function buildIndex(monsters: Monster[]) {
    const byMap: Record<string, Monster[]> = {};
    const byRegion: Record<string, Monster[]> = {};
    for (const m of monsters) {
      const seenMap = new Set<string>();
      const seenReg = new Set<string>();
      for (const p of m.places) {
        if (p.kind === "map" && !seenMap.has(p.id)) {
          (byMap[p.id] ||= []).push(m);
          seenMap.add(p.id);
        } else if (p.kind === "region" && !seenReg.has(p.id)) {
          (byRegion[p.id] ||= []).push(m);
          seenReg.add(p.id);
        }
      }
    }
    return { byMap, byRegion };
  }

  export const RECRUIT_LABELS_BY_RATE = (rate: string | null): string => {
    if (!rate) return "Não recrutável";
    // rate is like "1/2", "1/4", "1/16", "1/256"
    const m = rate.match(/(\d+)\s*\/\s*(\d+)/);
    if (!m) return rate;
    const denom = parseInt(m[2]);
    if (denom <= 4) return "Muito fácil";
    if (denom <= 16) return "Fácil";
    if (denom <= 64) return "Médio";
    if (denom <= 256) return "Difícil";
    return "Muito difícil";
  };
  