#Champions
Champion.delete_all

aatrox = Champion.create(
  id: 1,
  name: "Aatrox",
  icon: "./aatrox",
  ability_name: "The Darkin Blade",
  ability_icon: "./aatrox",
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
  attack_range: 180,
  armor: 25,
  magic_resist: 20,
  player_damage: [2, 4, 6],
  starting_items: ["WIP"]
)
ahri = Champion.create(
  id: 2,
  name: "Ahri",
  icon: "./ahri",
  ability_name: "Orb of Deception",
  ability_icon: "./ahri",
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
  attack_range: 660,
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
  attack_range: 180,
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
  attack_range: 890,
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
  attack_range: 960,
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
  attack_range: 720,
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
  attack_range: 180,
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
  attack_range: 660,
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
  attack_range: 180,
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
  ability_description: "Cho'gath ruptures an area, stunning and damaging enemies inside of it.",
  tier: 4,
  tier_color: "purple",
  origin_1: "Void",
  character_class_1: "Brawler",
  health: [1100, 2000, 4000],
  mana: 150,
  attack_damage: 70,
  attack_speed: 0.55,
  dps: 38.50,
  attack_range: 180,
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
  attack_range: 180,
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
  attack_range: 660,
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
  attack_range: 420,
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
  attack_range: 180,
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
  attack_range: 180,
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
  attack_range: 180,
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
  attack_range: 180,
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
  attack_range: 420,
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
  attack_range: 180,
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
  attack_range: 660,
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
  attack_range: 180,
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
