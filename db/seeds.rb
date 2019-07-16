Champion.delete_all
Team.delete_all

#Champions
aatrox = Champion.create(
  id: 1,
  name: "Aatrox",
  icon: "./aatrox",
  ability_name: "The Darkin Blade",
  ability_icon: "./aatrox",
  ability_type: "Active",
  ability_description: "Aatrox cleaves the area in front of him, dealing damage to enemies inside it.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Demon",
  character_class_1: "Blademaster",
  health: [750, 1350, 2700],
  mana: 100,
  attack_damage: 65,
  attack_speed: 0.65,
  dps: 42.25,
  attack_range: 1,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"],
)
ahri = Champion.create(
  id: 2,
  name: "Ahri",
  icon: "./ahri",
  ability_name: "Orb of Deception",
  ability_icon: "./ahri",
  ability_type: "Active",
  ability_description: "Ahri fires an orb in a line that returns to her, damaging enemies it passes through.",
  tier: 2,
  tier_color: "green",
  origin_1: "Wild",
  character_class_1: "Sorcerer",
  health: [450, 810, 1620],
  mana: 75,
  attack_damage: 50,
  attack_speed: 0.55,
  dps: 27.50,
  attack_range: 3,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
akali = Champion.create(
  id: 3,
  name: "Akali",
  icon: "./akali",
  ability_name: "Five Point Strike",
  ability_icon: "./akali",
  ability_type: "Active",
  ability_description: "Akali throws shurikens in front of her, dealing damage.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Ninja",
  character_class_1: "Assassin",
  health: [700, 1260, 2520],
  mana: 25,
  attack_damage: 70,
  attack_speed: 0.75,
  dps: 52.50,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
anivia = Champion.create(
  id: 4,
  name: "Anivia",
  icon: "./anivia",
  ability_name: "Glacial Storm",
  ability_icon: "./anivia",
  ability_type: "Active",
  ability_description: "Anivia channels a large hailstorm, damaging enemies inside of it.",
  tier: 5,
  tier_color: "yellow",
  origin_1: "Glacial",
  character_class_1: "Elementalist",
  health: [650, 1170, 2340],
  mana: 100,
  attack_damage: 40,
  attack_speed: 0.60,
  dps: 24.00,
  attack_range: 3,
  armor: 20,
  magic_resist: 20,
  player_damage: [4, 6, 8],
  starting_items: ["WIP"]
)
ashe = Champion.create(
  id: 5,
  name: "Ashe",
  icon: "./ashe",
  ability_name: "Enchanted Crystal Arrow",
  ability_icon: "./ashe",
  ability_type: "Active",
  ability_description: "Ashe fires an arrow that travels across the map, damages, and stuns (stun duration based on each hex traveled).",
  tier: 3,
  tier_color: "blue",
  origin_1: "Glacial",
  character_class_1: "Ranger",
  health: [550, 990, 1980],
  mana: 100,
  attack_damage: 60,
  attack_speed: 0.70,
  dps: 42.00,
  attack_range: 4,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
aurelionsol = Champion.create(
  id: 6,
  name: "Aurelion Sol",
  icon: "./aurelionsol",
  ability_name: "The Voice of Light",
  ability_icon: "./aurelionsol",
  ability_type: "Active",
  ability_description: "Aurelion Sol breathes a large blast of fire in a line, dealing damage to enemies.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Dragon",
  character_class_1: "Sorcerer",
  health: [600, 1080, 2160],
  mana: 125,
  attack_damage: 40,
  attack_speed: 0.60,
  dps: 24.00,
  attack_range: 3,
  armor: 20,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
blitzcrank = Champion.create(
  id: 7,
  name: "Blitzcrank",
  icon: "./blitzcrank",
  ability_name: "Rocket Grab",
  ability_icon: "./blitzcrank",
  ability_type: "Active",
  ability_description: "Blitzcrank pulls the furthest enemy to him.",
  tier: 2,
  tier_color: "green",
  origin_1: "Robot",
  character_class_1: "Brawler",
  health: [600, 1080, 2160],
  mana: 150,
  attack_damage: 50,
  attack_speed: 0.50,
  dps: 25.00,
  attack_range: 1,
  armor: 35,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
brand = Champion.create(
  id: 8,
  name: "Brand",
  icon: "./brand",
  ability_name: "Pyroclasm",
  ability_icon: "./brand",
  ability_type: "Active",
  ability_description: "Brand launches a bouncing fireball, damaging enemies hit.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Demon",
  character_class_1: "Elementalist",
  health: [700, 1260, 2520],
  mana: 100,
  attack_damage: 60,
  attack_speed: 0.60,
  dps: 36.00,
  attack_range: 3,
  armor: 25,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
braum = Champion.create(
  id: 9,
  name: "Braum",
  icon: "./braum",
  ability_name: "Unbreakable",
  ability_icon: "./braum",
  ability_type: "Active",
  ability_description: "Braum creates a barrier that blocks all incoming damage.",
  tier: 2,
  tier_color: "green",
  origin_1: "Glacial",
  character_class_1: "Guardian",
  health: [750, 1350, 2700],
  mana: 75,
  attack_damage: 40,
  attack_speed: 0.60,
  dps: 24.00,
  attack_range: 1,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
chogath = Champion.create(
  id: 10,
  name: "Cho\'Gath",
  icon: "./chogath",
  ability_name: "Rupture",
  ability_icon: "./chogath",
  ability_type: "Active",
  ability_description: "Cho\'gath ruptures an area, stunning and damaging enemies inside of it.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Void",
  character_class_1: "Brawler",
  health: [1100, 2000, 4000],
  mana: 150,
  attack_damage: 70,
  attack_speed: 0.55,
  dps: 38.50,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
darius = Champion.create(
  id: 11,
  name: "Darius",
  icon: "./darius",
  ability_name: "Decimate",
  ability_icon: "./darius",
  ability_type: "Active",
  ability_description: "Darius swings his axe, damaging nearby enemies and healing himself based off his missing health.",
  tier: 1,
  tier_color: "white",
  origin_1: "Imperial",
  character_class_1: "Knight",
  health: [600, 1080, 2160],
  mana: 100,
  attack_damage: 50,
  attack_speed: 0.50,
  dps: 25.00,
  attack_range: 1,
  armor: 25,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
draven = Champion.create(
  id: 12,
  name: "Draven",
  icon: "./draven",
  ability_name: "Spinning Axes",
  ability_icon: "./draven",
  ability_type: "Active",
  ability_description: "Draven gains bonus on-hit damage and Attack Speed. Stacks up to two times.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Imperial",
  character_class_1: "Blademaster",
  health: [700, 1260, 2520],
  mana: 50,
  attack_damage: 75,
  attack_speed: 0.65,
  dps: 48.75,
  attack_range: 3,
  armor: 25,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
elise = Champion.create(
  id: 13,
  name: "Elise",
  icon: "./elise",
  ability_name: "Spider Form",
  ability_icon: "./elise",
  ability_type: "Active",
  ability_description: "Elise fires a cocoon stunning the nearest enemy and transforms, summoning 2 Spiderlings.",
  tier: 2,
  tier_color: "green",
  origin_1: "Demon",
  character_class_1: "Shapeshifter",
  health: [500, 900, 1800],
  mana: 100,
  attack_damage: 40,
  attack_speed: 0.60,
  dps: 24.00,
  attack_range: 2,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
evelynn = Champion.create(
  id: 14,
  name: "Evelynn",
  icon: "./evelynn",
  ability_name: "Last Caress",
  ability_icon: "./evelynn",
  ability_type: "Active",
  ability_description: "Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against low health enemies.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Demon",
  character_class_1: "Assassin",
  health: [550, 990, 1980],
  mana: 75,
  attack_damage: 50,
  attack_speed: 0.60,
  dps: 30.00,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
fiora = Champion.create(
  id: 15,
  name: "Fiora",
  icon: "./fiora",
  ability_name: "Riposte",
  ability_icon: "./fiora",
  ability_type: "Active",
  ability_description: "Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy.",
  tier: 1,
  tier_color: "white",
  origin_1: "Noble",
  character_class_1: "Blademaster",
  health: [400, 720, 1440],
  mana: 75,
  attack_damage: 40,
  attack_speed: 0.70,
  dps: 28.00,
  attack_range: 1,
  armor: 25,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
gangplank = Champion.create(
  id: 16,
  name: "Gangplank",
  icon: "./gangplank",
  ability_name: "Powder Keg",
  ability_icon: "./gangplank",
  ability_type: "Passive/Active",
  ability_description: "Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Pirate",
  character_class_1: "Blademaster",
  character_class_2: "Gunslinger",
  health: [600, 1080, 2160],
  mana: 100,
  attack_damage: 55,
  attack_speed: 0.60,
  dps: 33.00,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
garen = Champion.create(
  id: 17,
  name: "Garen",
  icon: "./garen",
  ability_name: "Judgement",
  ability_icon: "./garen",
  ability_type: "Active",
  ability_description: "Garen rapidly spins his sword around his body, becoming immune to magic damage and dealing damage to nearby enemies.",
  tier: 1,
  tier_color: "white",
  origin_1: "Noble",
  character_class_1: "Knight",
  health: [600, 1080, 2160],
  mana: 100,
  attack_damage: 55,
  attack_speed: 0.55,
  dps: 30.25,
  attack_range: 1,
  armor: 35,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
gnar = Champion.create(
  id: 18,
  name: "Gnar",
  icon: "./gnar",
  ability_name: "GNAR!",
  ability_icon: "./gnar",
  ability_type: "Active",
  ability_description: "Gnar transforms and jumps behind the furthest enemy, damaging and shoving enemies backwards.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Wild",
  origin_2: "Yordle",
  character_class_1: "Shapeshifter",
  health: [850, 1530, 3060],
  mana: 125,
  attack_damage: 45,
  attack_speed: 0.70,
  dps: 31.50,
  attack_range: 2,
  armor: 35,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
graves = Champion.create(
  id: 19,
  name: "Graves",
  icon: "./graves",
  ability_name: "Buckshot",
  ability_icon: "./graves",
  ability_type: "Passive",
  ability_description: "Graves' attacks deal splash damage to nearby enemies.",
  tier: 1,
  tier_color: "white",
  origin_1: "Pirate",
  character_class_1: "Gunslinger",
  health: [500, 900, 1800],
  mana: 0,
  attack_damage: 55,
  attack_speed: 0.50,
  dps: 27.50,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
karthus = Champion.create(
  id: 20,
  name: "Karthus",
  icon: "./karthus",
  ability_name: "Requiem",
  ability_icon: "./karthus",
  ability_type: "Active",
  ability_description: "Karthus deals damage to a number of random enemies after a long channel.",
  tier: 5,
  tier_color: "yellow",
  origin_1: "Phantom",
  character_class_1: "Sorcerer",
  health: [850, 1530, 3060],
  mana: 100,
  attack_damage: 65,
  attack_speed: 0.65,
  dps: 42.25,
  attack_range: 3,
  armor: 25,
  magic_resist: 20,
  player_damage: [4, 6, 8],
  starting_items: ["WIP"]
)
kassadin = Champion.create(
  id: 21,
  name: "Kassadin",
  icon: "./kassadin",
  ability_name: "Nether Blade",
  ability_icon: "./kassadin",
  ability_type: "Passive",
  ability_description: "Kassadin's attacks steal mana from enemies, converting it into a shield.",
  tier: 1,
  tier_color: "white",
  origin_1: "Void",
  character_class_1: "Sorcerer",
  health: [550, 990, 1980],
  mana: 0,
  attack_damage: 45,
  attack_speed: 0.65,
  dps: 29.25,
  attack_range: 1,
  armor: 25,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
katarina = Champion.create(
  id: 22,
  name: "Katarina",
  icon: "./katarina",
  ability_name: "Death Lotus",
  ability_icon: "./katarina",
  ability_type: "Active",
  ability_description: "Katarina channels and fires daggers at a number of nearby enemies, dealing damage and reducing healing.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Imperial",
  character_class_1: "Assassin",
  health: [450, 810, 1620],
  mana: 100,
  attack_damage: 50,
  attack_speed: 0.65,
  dps: 32.50,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
kayle = Champion.create(
  id: 23,
  name: "Kayle",
  icon: "./kayle",
  ability_name: "Divine Judgement",
  ability_icon: "./kayle",
  ability_type: "Active",
  ability_description: "Kayle shields an ally, making them immune to damage.",
  tier: 5,
  tier_color: "yellow",
  origin_1: "Noble",
  character_class_1: "Knight",
  health: [800, 1440, 2880],
  mana: 100,
  attack_damage: 70,
  attack_speed: 1.1,
  dps: 77.00,
  attack_range: 3,
  armor: 35,
  magic_resist: 20,
  player_damage: [4, 6, 8],
  starting_items: ["WIP"]
)
kennen = Champion.create(
  id: 24,
  name: "Kennen",
  icon: "./kennen",
  ability_name: "Slicing Maelstrom",
  ability_icon: "./kennen",
  ability_type: "Active",
  ability_description: "Kennen summons a storm around him, dealing damage and stunning enemies inside of it.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Ninja",
  origin_2: "Yordle",
  character_class_1: "Elementalist",
  health: [550, 990, 1980],
  mana: 150,
  attack_damage: 70,
  attack_speed: 0.65,
  dps: 45.50,
  attack_range: 2,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
khazix = Champion.create(
  id: 25,
  name: "Kha\'Zix",
  icon: "./khazix",
  ability_name: "Taste Their Fear",
  ability_icon: "./khazix",
  ability_type: "Active",
  ability_description: "Kha\'Zix slashes the closest enemy, dealing bonus damage to enemies that are alone.",
  tier: 1,
  tier_color: "white",
  origin_1: "Void",
  character_class_1: "Assassin",
  health: [500, 900, 1800],
  mana: 50,
  attack_damage: 50,
  attack_speed: 0.60,
  dps: 30.00,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
kindred = Champion.create(
  id: 26,
  name: "Kindred",
  icon: "./kindred",
  ability_name: "Lamb\'s Respite",
  ability_icon: "./kindred",
  ability_type: "Active",
  ability_description: "Kindred creates a zone around herself that prevents allies from dying.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Phantom",
  character_class_1: "Ranger",
  health: [600, 1080, 2160],
  mana: 150,
  attack_damage: 55,
  attack_speed: 0.65,
  dps: 35.75,
  attack_range: 3,
  armor: 20,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
leona = Champion.create(
  id: 27,
  name: "Leona",
  icon: "./leona",
  ability_name: "Solar Flare",
  ability_icon: "./leona",
  ability_type: "Active",
  ability_description: "Leona calls down a solar ray, stunning enemies in the center and dealing damage to enemies inside it.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Noble",
  character_class_1: "Guardian",
  health: [750, 1350, 2700],
  mana: 150,
  attack_damage: 45,
  attack_speed: 0.55,
  dps: 24.75,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
lissandra = Champion.create(
  id: 28,
  name: "Lissandra",
  icon: "./lissandra",
  ability_name: "Frozen Tomb",
  ability_icon: "./lissandra",
  ability_type: "Active",
  ability_description: "Lissandra encases the target in ice, dealing damage to nearby enemies. Below half HP, Lissandra instead encases herself, becoming untargetable.",
  tier: 2,
  tier_color: "green",
  origin_1: "Glacial",
  character_class_1: "Elementalist",
  health: [450, 810, 1620],
  mana: 150,
  attack_damage: 40,
  attack_speed: 0.60,
  dps: 24.00,
  attack_range: 2,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
lucian = Champion.create(
  id: 29,
  name: "Lucian",
  icon: "./lucian",
  ability_name: "Relentless Pursuit",
  ability_icon: "./lucian",
  ability_type: "Active",
  ability_description: "Lucian dashes away to safety and attacks an enemy twice, once with Attack Damage and once with Spell Damage.",
  tier: 2,
  tier_color: "green",
  origin_1: "Noble",
  character_class_1: "Gunslinger",
  health: [600, 1080, 2160],
  mana: 35,
  attack_damage: 65,
  attack_speed: 0.65,
  dps: 42.25,
  attack_range: 3,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
lulu = Champion.create(
  id: 30,
  name: "Lulu",
  icon: "./lulu",
  ability_name: "Wild Growth",
  ability_icon: "./lulu",
  ability_type: "Active",
  ability_description: "Lulu grants an ally bonus Health, knocking up enemies near them.",
  tier: 2,
  tier_color: "green",
  origin_1: "Yordle",
  character_class_1: "Sorcerer",
  health: [500, 900, 1800],
  mana: 150,
  attack_damage: 50,
  attack_speed: 0.60,
  dps: 30.00,
  attack_range: 2,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
missfortune = Champion.create(
  id: 31,
  name: "Miss Fortune",
  icon: "./missfortune",
  ability_name: "Bullet Time",
  ability_icon: "./missfortune",
  ability_type: "Active",
  ability_description: "Miss Fortune channels and fires several waves of bullets in a cone.",
  tier: 5,
  tier_color: "yellow",
  origin_1: "Pirate",
  character_class_1: "Gunslinger",
  health: [650, 1170, 2340],
  mana: 75,
  attack_damage: 75,
  attack_speed: 0.85,
  dps: 63.75,
  attack_range: 3,
  armor: 20,
  magic_resist: 20,
  player_damage: [4, 6, 8],
  starting_items: ["WIP"]
)
mordekaiser = Champion.create(
  id: 32,
  name: "Mordekaiser",
  icon: "./mordekaiser",
  ability_name: "Obliterate",
  ability_icon: "./mordekaiser",
  ability_type: "Active",
  ability_description: "Mordekaiser slams his mace in front him, dealing damage in a line.",
  tier: 1,
  tier_color: "white",
  origin_1: "Phantom",
  character_class_1: "Knight",
  health: [500, 900, 1800],
  mana: 100,
  attack_damage: 50,
  attack_speed: 0.50,
  dps: 25.00,
  attack_range: 1,
  armor: 35,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
morgana = Champion.create(
  id: 33,
  name: "Morgana",
  icon: "./morgana",
  ability_name: "Soul Shackles",
  ability_icon: "./morgana",
  ability_type: "Active",
  ability_description: "Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Demon",
  character_class_1: "Sorcerer",
  health: [650, 1170, 2340],
  mana: 150,
  attack_damage: 50,
  attack_speed: 0.60,
  dps: 30.00,
  attack_range: 2,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
nidalee = Champion.create(
  id: 34,
  name: "Nidalee",
  icon: "./nidalee",
  ability_name: "Primal Surge",
  ability_icon: "./nidalee",
  ability_type: "Active",
  ability_description: "Nidalee heals herself and the weakest ally, then transforms.",
  tier: 1,
  tier_color: "white",
  origin_1: "Wild",
  character_class_1: "Shapeshifter",
  health: [500, 900, 1800],
  mana: 100,
  attack_damage: 50,
  attack_speed: 0.65,
  dps: 32.50,
  attack_range: 3,
  armor: 20,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
poppy = Champion.create(
  id: 35,
  name: "Poppy",
  icon: "./poppy",
  ability_name: "Keeper's Verdict",
  ability_icon: "./poppy",
  ability_type: "Active",
  ability_description: "Poppy brings down her hammer, knocking away nearby enemies.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Yordle",
  character_class_1: "Knight",
  health: [800, 1440, 2880],
  mana: 75,
  attack_damage: 50,
  attack_speed: 0.50,
  dps: 25.00,
  attack_range: 1,
  armor: 30,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
pyke = Champion.create(
  id: 36,
  name: "Pyke",
  icon: "./pyke",
  ability_name: "Phantom Undertow",
  ability_icon: "./pyke",
  ability_type: "Active",
  ability_description: "Pyke dashes behind the furthest enemy, creating an afterimage that stuns enemies it passes through.",
  tier: 2,
  tier_color: "green",
  origin_1: "Pirate",
  character_class_1: "Assassin",
  health: [600, 1080, 2160],
  mana: 100,
  attack_damage: 60,
  attack_speed: 0.60,
  dps: 36.00,
  attack_range: 1,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
reksai = Champion.create(
  id: 37,
  name: "Rek\'Sai",
  icon: "./reksai",
  ability_name: "Burrow",
  ability_icon: "./reksai",
  ability_type: "Active",
  ability_description: "Rek\'Sai burrows for a short duration becoming untargetable and healing. When Rek\'Sai unburrows she deals damage and knocks up the closest enemy.",
  tier: 2,
  tier_color: "green",
  origin_1: "Void",
  character_class_1: "Brawler",
  health: [650, 1170, 2340],
  mana: 150,
  attack_damage: 40,
  attack_speed: 0.65,
  dps: 26.00,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
rengar = Champion.create(
  id: 38,
  name: "Rengar",
  icon: "./rengar",
  ability_name: "Savagery",
  ability_icon: "./rengar",
  ability_type: "Active",
  ability_description: "Rengar leaps to the weakest enemy and stabs them.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Wild",
  character_class_1: "Assassin",
  health: [550, 900, 1980],
  mana: 75,
  attack_damage: 55,
  attack_speed: 0.55,
  dps: 30.25,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
sejuani = Champion.create(
  id: 39,
  name: "Sejuani",
  icon: "./sejuani",
  ability_name: "Glacial Prison",
  ability_icon: "./sejuani",
  ability_type: "Active",
  ability_description: "Sejuani creates a large glacial storm, stunning enemies within it after a short delay.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Glacial",
  character_class_1: "Knight",
  health: [850, 1530, 3060],
  mana: 150,
  attack_damage: 45,
  attack_speed: 0.55,
  dps: 24.75,
  attack_range: 1,
  armor: 35,
  magic_resist: 20,
  player_damage: [3, 5, 7],
  starting_items: ["WIP"]
)
shen = Champion.create(
  id: 40,
  name: "Shen",
  icon: "./shen",
  ability_name: "Spirit's Refuge",
  ability_icon: "./shen",
  ability_type: "Active",
  ability_description: "Shen creates a zone around himself, allowing allies to dodge all attacks.",
  tier: 2,
  tier_color: "green",
  origin_1: "Ninja",
  character_class_1: "Blademaster",
  health: [650, 1170, 2340],
  mana: 150,
  attack_damage: 65,
  attack_speed: 0.60,
  dps: 39.00,
  attack_range: 1,
  armor: 30,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
shyvana = Champion.create(
  id: 41,
  name: "Shyvana",
  icon: "./shyvana",
  ability_name: "Dragon's Descent",
  ability_icon: "./shyvana",
  ability_type: "Active",
  ability_description: "Shyvana dashes away and transforms. While transformed, Shyvana's attacks become ranged and light the ground on fire.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Dragon",
  character_class_1: "Shapeshifter",
  health: [550, 990, 1980],
  mana: 100,
  attack_damage: 50,
  attack_speed: 0.65,
  dps: 32.50,
  attack_range: 1,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
swain = Champion.create(
  id: 42,
  name: "Swain",
  icon: "./swain",
  ability_name: "Demonflare",
  ability_icon: "./swain",
  ability_type: "Active",
  ability_description: "Swain transforms, draining health from all nearby enemies.",
  tier: 5,
  tier_color: "yellow",
  origin_1: "Demon",
  origin_2: "Imperial",
  character_class_1: "Shapeshifter",
  health: [850, 1530, 3060],
  mana: 100,
  attack_damage: 65,
  attack_speed: 0.65,
  dps: 42.25,
  attack_range: 2,
  armor: 25,
  magic_resist: 20,
  player_damage: [4, 6, 8],
  starting_items: ["WIP"]
)
tristana = Champion.create(
  id: 43,
  name: "Tristana",
  icon: "./tristana",
  ability_name: "Explosive Charge",
  ability_icon: "./tristana",
  ability_type: "Active",
  ability_description: "Tristana places a bomb on her current target that detonates after 4 attacks, damaging nearby enemies.",
  tier: 1,
  tier_color: "white",
  origin_1: "Yordle",
  character_class_1: "Gunslinger",
  health: [500, 900, 1800],
  mana: 50,
  attack_damage: 50,
  attack_speed: 0.70,
  dps: 35.00,
  attack_range: 4,
  armor: 20,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
varus = Champion.create(
  id: 44,
  name: "Varus",
  icon: "./varus",
  ability_name: "Piercing Arrow",
  ability_icon: "./varus",
  ability_type: "Active",
  ability_description: "Varus charges and fires an arrow, dealing damage to all enemies in a line.",
  tier: 2,
  tier_color: "green",
  origin_1: "Demon",
  character_class_1: "Ranger",
  health: [500, 900, 1800],
  mana: 75,
  attack_damage: 50,
  attack_speed: 0.70,
  dps: 35.00,
  attack_range: 4,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)
vayne = Champion.create(
  id: 45,
  name: "Vayne",
  icon: "./vayne",
  ability_name: "Silver Bolts",
  ability_icon: "./vayne",
  ability_type: "Passive",
  ability_description: "Vayne deals bonus true damage every third attack based on the enemy's maximum health.",
  tier: 1,
  tier_color: "white",
  origin_1: "Noble",
  character_class_1: "Ranger",
  health: [550, 990, 1980],
  mana: 0,
  attack_damage: 45,
  attack_speed: 0.60,
  dps: 27.00,
  attack_range: 3,
  armor: 25,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
veigar = Champion.create(
  id: 46,
  name: "Veigar",
  icon: "./veigar",
  ability_name: "Primordial Burst",
  ability_icon: "./veigar",
  ability_type: "Active",
  ability_description: "Veigar blasts an enemy with magical energy. This spell instantly kills if the enemy is a lower star level than Veigar.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Yordle",
  character_class_1: "Sorcerer",
  health: [450, 810, 1620],
  mana: 85,
  attack_damage: 45,
  attack_speed: 0.55,
  dps: 24.75,
  attack_range: 3,
  armor: 20,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
volibear = Champion.create(
  id: 47,
  name: "Volibear",
  icon: "./volibear",
  ability_name: "Thunder Claws",
  ability_icon: "./volibear",
  ability_type: "Active",
  ability_description: "Volibear's attacks bounce between enemies.",
  tier: 3,
  tier_color: "blue",
  origin_1: "Glacial",
  character_class_1: "Brawler",
  health: [650, 1170, 2340],
  mana: 100,
  attack_damage: 75,
  attack_speed: 0.55,
  dps: 41.25,
  attack_range: 1,
  armor: 35,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
warwick = Champion.create(
  id: 48,
  name: "Warwick",
  icon: "./warwick",
  ability_name: "Infinite Duress",
  ability_icon: "./warwick",
  ability_type: "Active",
  ability_description: "Warwick pounces onto the lowest health enemy, stunning and damaging them.",
  tier: 1,
  tier_color: "white",
  origin_1: "Wild",
  character_class_1: "Brawler",
  health: [600, 1080, 2160],
  mana: 150,
  attack_damage: 50,
  attack_speed: 0.60,
  dps: 30.00,
  attack_range: 1,
  armor: 30,
  magic_resist: 20,
  player_damage: [1, 2, 4],
  starting_items: ["WIP"]
)
yasuo = Champion.create(
  id: 49,
  name: "Yasuo",
  icon: "./yasuo",
  ability_name: "Steel Tempest",
  ability_icon: "./yasuo",
  ability_type: "Active",
  ability_description: "Yasuo stabs forward dealing damage. On third cast, Yasuo launches a tornado dealing damage and knocking up enemies in a line.",
  tier: 5,
  tier_color: "yellow",
  origin_1: "Exile",
  character_class_1: "Blademaster",
  health: [700, 1260, 2520],
  mana: 25,
  attack_damage: 65,
  attack_speed: 1.00,
  dps: 65.00,
  attack_range: 1,
  armor: 35,
  magic_resist: 20,
  player_damage: [4, 6, 8],
  starting_items: ["WIP"]
)
zed = Champion.create(
  id: 50,
  name: "Zed",
  icon: "./zed",
  ability_name: "Razor Shuriken",
  ability_icon: "./zed",
  ability_type: "Active",
  ability_description: "Zed fires a shuriken in a line, damaging enemies it passes through.",
  tier: 2,
  tier_color: "green",
  origin_1: "Ninja",
  character_class_1: "Assassin",
  health: [500, 900, 1800],
  mana: 75,
  attack_damage: 60,
  attack_speed: 0.65,
  dps: 39.00,
  attack_range: 1,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 3, 5],
  starting_items: ["WIP"]
)

#Origins
demon = Team.create(
  id: 1,
  name: "Demon",
  icon: "./demon",
  teamType: "Origin",
  desciption: "Attacks from Demons have a chance to burn all of an enemy's mana and deal that much true damage",
  upgrade_1_number: "2:",
  upgrade_1_description: "40% chance",
  upgrade_2_number: "4:",
  upgrade_2_description: "60% chance",
  upgrade_3_number: "6:",
  upgrade_3_description: "80% chance"
)
demon.champions << [aatrox, brand, elise, evelynn, swain, varus]
dragon = Team.create(
  id: 2,
  name: "Dragon",
  icon: "./dragon",
  teamType: "Origin",
  desciption: "While 2 Dragons are in play, all Dragons are immune to magic damage"
)
dragon.champions << [aurelionsol, shyvana]
exile = Team.create(
  id: 3,
  name: "Exile",
  icon: "./exile",
  teamType: "Origin",
  desciption: "If an Exile has no adjacent allies at the start of combat, they gain a shield equal to a 100% max health"
)
exile.champions << [yasuo]
glacial = Team.create(
  id: 4,
  name: "Glacial",
  icon: "./glacial",
  teamType: "Origin",
  desciption: "On hit, Glacials have a chance to stun for 2s",
  upgrade_1_number: "2:",
  upgrade_1_description: "20% chance",
  upgrade_2_number: "4:",
  upgrade_2_description: "30% chance",
  upgrade_3_number: "6:",
  upgrade_3_description: "45% chance"
)
glacial.champions << [anivia, ashe, braum, lissandra, sejuani, volibear]
imperial = Team.create(
  id: 5,
  name: "Imperial",
  icon: "./imperial",
  teamType: "Origin",
  desciption: "A select number of Imperials deal double damage",
  upgrade_1_number: "2:",
  upgrade_1_description: "One random Imperial",
  upgrade_2_number: "4:",
  upgrade_2_description: "All Imperials"
)
imperial.champions << [darius, draven, katarina, swain]
ninja = Team.create(
  id: 6,
  name: "Ninja",
  icon: "./ninja",
  teamType: "Origin",
  desciption: "Ninjas gain a percentage of Attack Damage",
  upgrade_1_number: "1:",
  upgrade_1_description: "This Ninja gains 40% attack damage",
  upgrade_2_number: "4:",
  upgrade_2_description: "All Ninjas gain 80% attack damage"
)
ninja.champions << [akali, kennen, shen, zed]
noble = Team.create(
  id: 7,
  name: "Noble",
  icon: "./noble",
  teamType: "Origin",
  desciption: "Grants 100 armor and basic attacks restore 35 health on-hit",
  upgrade_1_number: "3:",
  upgrade_1_description: "A random ally",
  upgrade_2_number: "6:",
  upgrade_2_description: "All allies"
)
noble.champions << [fiora, garen, kayle, leona, lucian, vayne]
phantom = Team.create(
  id: 8,
  name: "Phantom",
  icon: "./phantom",
  teamType: "Origin",
  desciption: "While 2 Phantoms are in play, a random enemy will begin combat with 100 health",
)
phantom.champions << [karthus, kindred, mordekaiser]
pirate = Team.create(
  id: 9,
  name: "Pirate",
  icon: "./pirate",
  teamType: "Origin",
  desciption: "While 3 Pirates are in play, you begin each PvP round with a chest that grants between 0 and 4 gold"
)
pirate.champions << [gangplank, graves, missfortune, pyke]
robot = Team.create(
  id: 10,
  name: "Robot",
  icon: "./robot",
  teamType: "Origin",
  desciption: "Robots start combat at full mana"
)
robot.champions << [blitzcrank]
void = Team.create(
  id: 11,
  name: "Void",
  icon: "./void",
  teamType: "Origin",
  desciption: "While 3 Voidlings are in play, your team gains 50% armor penetration"
)
void.champions << [chogath, kassadin, khazix, reksai]
wild = Team.create(
  id: 12,
  name: "Wild",
  icon: "./wild",
  teamType: "Origin",
  desciption: "Wildlings generate Fury on-hit, up to 5. Each stack gives 7% attack speed",
  upgrade_1_number: "2:",
  upgrade_1_description: "Fury benefits all allied Wildlings",
  upgrade_2_number: "4:",
  upgrade_2_description: "Fury benefits all allies"
)
wild.champions << [ahri, gnar, nidalee, rengar, warwick]
yordle = Team.create(
  id: 13,
  name: "Yordle",
  icon: "./yordle",
  teamType: "Origin",
  desciption: "Yordles have a chance to Blind icon dodge enemy attacks",
  upgrade_1_number: "3:",
  upgrade_1_description: "25% chance",
  upgrade_2_number: "6:",
  upgrade_2_description: "60% chance"
)
yordle.champions << [gnar, kennen, lulu, poppy, tristana, veigar]

#Classes
assassin = Team.create(
  id: 14,
  name: "Assassin",
  icon: "./assassin",
  teamType: "Class",
  desciption: "Assassins have bonus critical strike damage",
  upgrade_1_number: "2:",
  upgrade_1_description: "+150% critical strike damage",
  upgrade_2_number: "6:",
  upgrade_2_description: "+350% critical strike damage"
)
assassin.champions << [akali, evelynn, katarina, khazix, pyke, rengar, zed]

blademaster = Team.create(
  id: 15,
  name: "Blademaster",
  icon: "./blademaster",
  teamType: "Class",
  desciption: "Blademasters have a 45% chance to perform a multi-attack",
  upgrade_1_number: "3:",
  upgrade_1_description: "Double strike",
  upgrade_2_number: "6:",
  upgrade_2_description: "Triple strike"
)
blademaster.champions << [aatrox, draven, fiora, gangplank, shen, yasuo]
