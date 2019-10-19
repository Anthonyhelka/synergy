Champion.delete_all
Team.delete_all

#Champions
aatrox = Champion.create(
  id: 1,
  key: "aatrox",
  name: "Aatrox",
  title: "The Darkin Blade",
  origins: ["Demon"],
  classes: ["Blademaster"],
  cost: 3,
  ability: {
    name: "The Darkin Blade",
    description: "Aatrox cleaves the area in front of him, dealing damage to enemies inside it.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "300 / 600 / 900"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attackSpeed: 0.65,
      dps: 42,
      range: 1
    },
    defense: {
      health: 700,
      armor: 35,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
ahri = Champion.create(
  id: 2,
  key: "ahri",
  name: "Ahri",
  title: "The Nine-Tailed Fox",
  origins: ["Wild"],
  classes: ["Sorcerer"],
  cost: 2,
  ability: {
    name: "Spirit Orb",
    description: "Ahri fires an orb in a line that returns to her, damaging enemies it passes through.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "100 / 200 / 300"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attackSpeed: 0.55,
      dps: 28,
      range: 3
    },
    defense: {
      health: 450,
      armor: 20,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
akali = Champion.create(
  id: 3,
  key: "akali",
  name: "Akali",
  title: "The Rogue Assassin",
  origins: ["Ninja"],
  classes: ["Assassin"],
  cost: 4,
  ability: {
    name: "Five Point Strike",
    description: "Akali throws shurikens in front of her, dealing damage.",
    type: "Active",
    mana_cost: 25,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "200 / 350 / 500"
      }
    ]
  },
  stats: {
    offense: {
      damage: 80,
      attackSpeed: 0.80,
      dps: 53,
      range: 1
    },
    defense: {
      health: 650,
      armor: 20,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
anivia = Champion.create(
  id: 4,
  key: "anivia",
  name: "Anivia",
  title: "The Cryophoenix",
  origins: ["Glacial"],
  classes: ["Elementalist"],
  cost: 5,
  ability: {
    name: "Glacial Storm",
    description: "Anivia channels a large hailstorm, damaging enemies inside of it.",
    type: "Active",
    mana_cost: 125,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "800 / 950 / 1200"
      },
      {
        type: "Attack Speed Slow",
        value: "50 / 70 / 90"
      },
      {
        type: "Storm Duration",
        value: "6s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attackSpeed: 0.80,
      dps: 24,
      range: 3
    },
    defense: {
      health: 750,
      armor: 20,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
ashe = Champion.create(
  id: 5,
  key: "ashe",
  name: "Ashe",
  title: "The Frost Archer",
  origins: ["Glacial"],
  classes: ["Ranger"],
  cost: 3,
  ability: {
    name: "Enchanted Crystal Arrow",
    description: "Ashe fires an arrow that travels across the map, damages, and stuns (stun duration based on each hex traveled).",
    type: "Active",
    mana_cost: 125,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "700 / 950 / 1200"
      },
      {
        type: "Stun Duration (per hex traveled)",
        value: "1s / 1.5s / 2s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attackSpeed: 0.70,
      dps: 42,
      range: 4
    },
    defense: {
      health: 550,
      armor: 20,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
aurelion_sol = Champion.create(
  id: 6,
  key: "aurelion_sol",
  name: "Aurelion Sol",
  title: "The Star Forger",
  origins: ["Dragon"],
  classes: ["Sorcerer"],
  cost: 4,
  ability: {
    name: "The Voice of Light",
    description: "Aurelion Sol breathes a large blast of fire in a line, dealing damage to enemies.",
    type: "Active",
    mana_cost: 125,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "250 / 500 / 750"
      },
      {
        type: "Channel Duration",
        value: "0.35s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attackSpeed: 0.60,
      dps: 24,
      range: 3
    },
    defense: {
      health: 650,
      armor: 20,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
blitzcrank = Champion.create(
  id: 7,
  key: "blitzcrank",
  name: "Blitzcrank",
  title: "The Great Steam Golem",
  origins: ["Robot"],
  classes: ["Brawler"],
  cost: 2,
  ability: {
    name: "Rocket Grab",
    description: "Blitzcrank pulls the furthest enemy to him and stuns them.",
    type: "Active",
    mana_cost: 125,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "250 / 550 / 850"
      },
      {
        type: "Stun Duration",
        value: "2.5s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attackSpeed: 0.50,
      dps: 25,
      range: 1
    },
    defense: {
      health: 650,
      armor: 35,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
brand = Champion.create(
  id: 8,
  key: "brand",
  name: "Brand",
  title: "The Burning Vengeance",
  origins: ["Demon"],
  classes: ["Elementalist"],
  cost: 4,
  ability: {
    name: "Pyroclasm",
    description: "Brand launches a bouncing fireball, damaging enemies hit.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "250 / 450 / 650"
      },
      {
        type: "Bounces",
        value: "4 / 4 / 6"
      }
    ]
  },
  stats: {
    offense: {
      damage: 60,
      attackSpeed: 0.60,
      dps: 36,
      range: 3
    },
    defense: {
      health: 700,
      armor: 25,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
braum = Champion.create(
  id: 9,
  key: "braum",
  name: "Braum",
  title: "The Heart of the Freljord",
  origins: ["Glacial"],
  classes: ["Guardian"],
  cost: 2,
  ability: {
    name: "Unbreakable",
    description: "Braum creates a barrier that blocks all incoming damage.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage Reduction",
        value: "70% / 80% / 90%"
      },
      {
        type: "Duration",
        value: "4s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attackSpeed: 0.60,
      dps: 24,
      range: 1
    },
    defense: {
      health: 650,
      armor: 75,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
camille = Champion.create(
  id: 52,
  key: "camille",
  name: "Camille",
  title: "The Steel Shadow",
  origins: ["Hextech"],
  classes: ["Blademaster"],
  cost: 1,
  ability: {
    name: "The Hextech Ultimatum",
    description: "Camille singles out an enemy, dealing magic damage and rooting them for few seconds. Camille's allies in range will prioritize attacking that enemy.",
    type: "Active",
    mana_cost: 150,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "200 / 325 / 450"
      },
      {
        type: "Root Duration",
        value: "4s / 5s / 6s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 55,
      attackSpeed: 0.60,
      dps: 30,
      range: 1
    },
    defense: {
      health: 550,
      armor: 25,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)
cho_gath = Champion.create(
  id: 10,
  key: "cho_gath",
  name: "Cho'Gath",
  title: "The Terror of the Void",
  origins: ["Void"],
  classes: ["Brawler"],
  cost: 4,
  ability: {
    name: "Rupture",
    description: "Cho'gath ruptures an area, stunning and damaging enemies inside of it.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "175 / 350 / 525"
      },
      {
        type: "Knockup Duration",
        value: "1.5s / 1.75s / 2s",
      },
      {
        type: "Radius",
        value: "3 hexes",
      }
    ]
  },
  stats: {
    offense: {
      damage: 70,
      attackSpeed: 0.60,
      dps: 39,
      range: 1
    },
    defense: {
      health: 1000,
      armor: 25,
      magicResist: 20
    }
  },
  items: ["WIP"],
  active: true
)

# darius = Champion.create(
#   id: 11,
#   name: "Darius",
#   icon: "./darius",
#   title: "The Hand of Noxus",
#   ability_name: "Decimate",
#   ability_icon: "./darius",
#   ability_type: "Active",
#   ability_description: "Darius swings his axe, damaging nearby enemies and healing himself based off his missing health.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Imperial",
#   character_class_1: "Knight",
#   health: [600, 1080, 2160],
#   starting_mana: 0,
#   mana_cost: 100,
#   attack_damage: 50,
#   attack_speed: 0.50,
#   attack_range: 1,
#   armor: 40,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# draven = Champion.create(
#   id: 12,
#   name: "Draven",
#   icon: "./draven",
#   title: "The Glorious Executioner",
#   ability_name: "Spinning Axes",
#   ability_icon: "./draven",
#   ability_type: "Active",
#   ability_description: "Draven gains bonus on-hit damage and Attack Speed. Stacks up to two times.",
#   tier: 4,
#   tier_color: tier_color(4),
#   origin_1: "Imperial",
#   character_class_1: "Blademaster",
#   health: [650, 1260, 2520],
#   starting_mana: 0,
#   mana_cost: 50,
#   attack_damage: 70,
#   attack_speed: 0.75,
#   attack_range: 3,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(4)
# )
# elise = Champion.create(
#   id: 13,
#   name: "Elise",
#   icon: "./elise",
#   title: "The Spider Queen",
#   ability_name: "Spider Form",
#   ability_icon: "./elise",
#   ability_type: "Active",
#   ability_description: "Elise fires a cocoon stunning the nearest enemy and transforms, summoning 1-4 Spiderlings depending on level.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Demon",
#   character_class_1: "Shapeshifter",
#   health: [500, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 100,
#   attack_damage: 45,
#   attack_speed: 0.70,
#   attack_range: 2,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# evelynn = Champion.create(
#   id: 14,
#   name: "Evelynn",
#   icon: "./evelynn",
#   title: "Agony's Embrace",
#   ability_name: "Last Caress",
#   ability_icon: "./evelynn",
#   ability_type: "Active",
#   ability_description: "Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against low health enemies.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Demon",
#   character_class_1: "Assassin",
#   health: [550, 990, 1980],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 70,
#   attack_speed: 0.60,
#   attack_range: 1,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# fiora = Champion.create(
#   id: 15,
#   name: "Fiora",
#   icon: "./fiora",
#   title: "The Grand Duelist",
#   ability_name: "Riposte",
#   ability_icon: "./fiora",
#   ability_type: "Active",
#   ability_description: "Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Noble",
#   character_class_1: "Blademaster",
#   health: [450, 720, 1440],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 40,
#   attack_speed: 1.0,
#   attack_range: 1,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# gangplank = Champion.create(
#   id: 16,
#   name: "Gangplank",
#   icon: "./gangplank",
#   title: "The Saltwater Scourge",
#   ability_name: "Powder Keg",
#   ability_icon: "./gangplank",
#   ability_type: "Passive/Active",
#   ability_description: "Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Pirate",
#   character_class_1: "Blademaster",
#   character_class_2: "Gunslinger",
#   health: [700, 1080, 2160],
#   starting_mana: 0,
#   mana_cost: 100,
#   attack_damage: 60,
#   attack_speed: 0.65,
#   attack_range: 1,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# garen = Champion.create(
#   id: 17,
#   name: "Garen",
#   icon: "./garen",
#   title: "The Might of Demacia",
#   ability_name: "Judgement",
#   ability_icon: "./garen",
#   ability_type: "Active",
#   ability_description: "Garen rapidly spins his sword around his body, becoming immune to magic damage and dealing damage to nearby enemies.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Noble",
#   character_class_1: "Knight",
#   health: [600, 1080, 2160],
#   starting_mana: 0,
#   mana_cost: 100,
#   attack_damage: 50,
#   attack_speed: 0.60,
#   attack_range: 1,
#   armor: 40,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# gnar = Champion.create(
#   id: 18,
#   name: "Gnar",
#   icon: "./gnar",
#   title: "The Missing Link",
#   ability_name: "GNAR!",
#   ability_icon: "./gnar",
#   ability_type: "Active",
#   ability_description: "Gnar transforms and jumps behind the furthest enemy, damaging and shoving enemies backwards.",
#   tier: 4,
#   tier_color: tier_color(4),
#   origin_1: "Wild",
#   origin_2: "Yordle",
#   character_class_1: "Shapeshifter",
#   health: [700, 1530, 3060],
#   starting_mana: 0,
#   mana_cost: 100,
#   attack_damage: 50,
#   attack_speed: 0.70,
#   attack_range: 2,
#   armor: 30,
#   magic_resist: 20,
#   player_damage: player_damage(4)
# )
# graves = Champion.create(
#   id: 19,
#   name: "Graves",
#   icon: "./graves",
#   title: "The Outlaw",
#   ability_name: "Buckshot",
#   ability_icon: "./graves",
#   ability_type: "Passive",
#   ability_description: "Graves\' attacks deal splash damage to nearby enemies.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Pirate",
#   character_class_1: "Gunslinger",
#   health: [450, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 0,
#   attack_damage: 55,
#   attack_speed: 0.55,
#   attack_range: 1,
#   armor: 30,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# jayce = Champion.create(
#   id: 53,
#   name: "Jayce",
#   icon: "./jayce",
#   title: "The Defender of Tomorrow",
#   ability_name: "Mercury Cannon",
#   ability_icon: "./jayce",
#   ability_type: "Active",
#   ability_description: "Jayce disrupts the enemy frontline by knocking back an enemy unit with his hammer. He then switches to his Mercury Cannon bringing increased attack speed and ranged damage.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Hextech",
#   character_class_1: "Shapeshifter",
#   health: [600, 1080, 2160],
#   starting_mana: 0,
#   mana_cost: 50,
#   attack_damage: 55,
#   attack_speed: 0.70,
#   attack_range: 1,
#   armor: 35,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# jinx = Champion.create(
#   id: 54,
#   name: "Jinx",
#   icon: "./jinx",
#   title: "The Loose Cannon",
#   ability_name: "Get Excited!",
#   ability_icon: "./jinx",
#   ability_type: "Passive",
#   ability_description: "Jinx Gets Excited after her first takedown, gaining bonus attack speed. If she scores a second takedown she pulls out Fishbones, her rocket launcher, causing her attacks to deal AoE damage.",
#   tier: 4,
#   tier_color: tier_color(4),
#   origin_1: "Hextech",
#   character_class_1: "Gunslinger",
#   health: [550, 990, 1980],
#   starting_mana: 0,
#   mana_cost: 0,
#   attack_damage: 75,
#   attack_speed: 0.70,
#   attack_range: 3,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(4)
# )
# kaisa = Champion.create(
#   id: 57,
#   name: "Kai'Sa",
#   icon: "./kaisa",
#   title: "Daughter of the Void",
#   ability_name: "Killer Instinct",
#   ability_icon: "./kaisa",
#   ability_type: "Active",
#   ability_description: "Kai'Sa dashes to the furthest enemy unit, gaining a shield and bonus attack speed for 3 seconds.",
#   tier: 5,
#   tier_color: tier_color(5),
#   origin_1: "Void",
#   character_class_1: "Assassin",
#   character_class_2: "Ranger",
#   health: [700, 1260, 2520],
#   starting_mana: 50,
#   mana_cost: 125,
#   attack_damage: 55,
#   attack_speed: 1.25,
#   attack_range: 2,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(5)
# )
# karthus = Champion.create(
#   id: 20,
#   name: "Karthus",
#   icon: "./karthus",
#   title: "The Deathsinger",
#   ability_name: "Requiem",
#   ability_icon: "./karthus",
#   ability_type: "Active",
#   ability_description: "Karthus deals damage to a number of random enemies after a long channel.",
#   tier: 5,
#   tier_color: tier_color(5),
#   origin_1: "Phantom",
#   character_class_1: "Sorcerer",
#   health: [850, 1530, 3060],
#   starting_mana: 40,
#   mana_cost: 125,
#   attack_damage: 65,
#   attack_speed: 0.65,
#   attack_range: 3,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(5)
# )
# kassadin = Champion.create(
#   id: 21,
#   name: "Kassadin",
#   icon: "./kassadin",
#   title: "The Void Walker",
#   ability_name: "Nether Blade",
#   ability_icon: "./kassadin",
#   ability_type: "Passive",
#   ability_description: "Kassadin\'s attacks steal mana from enemies, converting it into a shield.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Void",
#   character_class_1: "Sorcerer",
#   health: [550, 990, 1980],
#   starting_mana: 0,
#   mana_cost: 0,
#   attack_damage: 40,
#   attack_speed: 0.55,
#   attack_range: 1,
#   armor: 35,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# katarina = Champion.create(
#   id: 22,
#   name: "Katarina",
#   icon: "./katarina",
#   title: "The Sinister Blade",
#   ability_name: "Death Lotus",
#   ability_icon: "./katarina",
#   ability_type: "Active",
#   ability_description: "Katarina channels and fires daggers at a number of nearby enemies, dealing damage and reducing healing.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Imperial",
#   character_class_1: "Assassin",
#   health: [450, 810, 1620],
#   starting_mana: 0,
#   mana_cost: 85,
#   attack_damage: 65,
#   attack_speed: 0.65,
#   attack_range: 1,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# kayle = Champion.create(
#   id: 23,
#   name: "Kayle",
#   icon: "./kayle",
#   title: "The Righteous",
#   ability_name: "Divine Judgement",
#   ability_icon: "./kayle",
#   ability_type: "Active",
#   ability_description: "Kayle shields an ally, making them immune to damage.",
#   tier: 5,
#   tier_color: tier_color(5),
#   origin_1: "Noble",
#   character_class_1: "Knight",
#   health: [750, 1440, 2880],
#   starting_mana: 0,
#   mana_cost: 125,
#   attack_damage: 70,
#   attack_speed: 1.0,
#   attack_range: 3,
#   armor: 40,
#   magic_resist: 20,
#   player_damage: player_damage(5)
# )
# kennen = Champion.create(
#   id: 24,
#   name: "Kennen",
#   icon: "./kennen",
#   title: "The Heart of the Tempest",
#   ability_name: "Slicing Maelstrom",
#   ability_icon: "./kennen",
#   ability_type: "Active",
#   ability_description: "Kennen summons a storm around him, dealing damage and stunning enemies inside of it.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Ninja",
#   origin_2: "Yordle",
#   character_class_1: "Elementalist",
#   health: [550, 990, 1980],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 65,
#   attack_speed: 0.65,
#   attack_range: 2,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# khazix = Champion.create(
#   id: 25,
#   name: "Kha\'Zix",
#   icon: "./khazix",
#   title: "The Voidreaver",
#   ability_name: "Taste Their Fear",
#   ability_icon: "./khazix",
#   ability_type: "Active",
#   ability_description: "Kha\'Zix slashes the closest enemy, dealing bonus damage to enemies that are alone.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Void",
#   character_class_1: "Assassin",
#   health: [500, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 65,
#   attack_damage: 55,
#   attack_speed: 0.60,
#   attack_range: 1,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# kindred = Champion.create(
#   id: 26,
#   name: "Kindred",
#   icon: "./kindred",
#   title: "The Eternal Hunters",
#   ability_name: "Lamb\'s Respite",
#   ability_icon: "./kindred",
#   ability_type: "Active",
#   ability_description: "Kindred creates a zone around herself that prevents allies from dying.",
#   tier: 4,
#   tier_color: tier_color(4),
#   origin_1: "Phantom",
#   character_class_1: "Ranger",
#   health: [600, 1080, 2160],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 60,
#   attack_speed: 0.70,
#   attack_range: 3,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(4)
# )
# leona = Champion.create(
#   id: 27,
#   name: "Leona",
#   icon: "./leona",
#   title: "The Radiant Dawn",
#   ability_name: "Solar Flare",
#   ability_icon: "./leona",
#   ability_type: "Active",
#   ability_description: "Leona calls down a solar ray, stunning enemies in the center and dealing damage to enemies inside it.",
#   tier: 4,
#   tier_color: tier_color(4),
#   origin_1: "Noble",
#   character_class_1: "Guardian",
#   health: [800, 1350, 2700],
#   starting_mana: 0,
#   mana_cost: 100,
#   attack_damage: 45,
#   attack_speed: 0.55,
#   attack_range: 1,
#   armor: 100,
#   magic_resist: 20,
#   player_damage: player_damage(4)
# )
# lissandra = Champion.create(
#   id: 28,
#   name: "Lissandra",
#   icon: "./lissandra",
#   title: "The Ice Witch",
#   ability_name: "Frozen Tomb",
#   ability_icon: "./lissandra",
#   ability_type: "Active",
#   ability_description: "Lissandra encases the target in ice, dealing damage to nearby enemies. Below half HP, Lissandra instead encases herself, becoming untargetable.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Glacial",
#   character_class_1: "Elementalist",
#   health: [500, 810, 1620],
#   starting_mana: 0,
#   mana_cost: 85,
#   attack_damage: 40,
#   attack_speed: 0.60,
#   attack_range: 2,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# lucian = Champion.create(
#   id: 29,
#   name: "Lucian",
#   icon: "./lucian",
#   title: "The Purifier",
#   ability_name: "Relentless Pursuit",
#   ability_icon: "./lucian",
#   ability_type: "Active",
#   ability_description: "Lucian dashes away to safety and attacks an enemy twice, once with Attack Damage and once with Spell Damage.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Noble",
#   character_class_1: "Gunslinger",
#   health: [600, 1080, 2160],
#   starting_mana: 0,
#   mana_cost: 35,
#   attack_damage: 65,
#   attack_speed: 0.65,
#   attack_range: 3,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# lulu = Champion.create(
#   id: 30,
#   name: "Lulu",
#   icon: "./lulu",
#   title: "The Fae Sorceress",
#   ability_name: "Wild Growth",
#   ability_icon: "./lulu",
#   ability_type: "Active",
#   ability_description: "Lulu grants an ally bonus Health, knocking up enemies near them.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Yordle",
#   character_class_1: "Sorcerer",
#   health: [500, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 50,
#   attack_speed: 0.60,
#   attack_range: 2,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# missfortune = Champion.create(
#   id: 31,
#   name: "Miss Fortune",
#   icon: "./missfortune",
#   title: "The Bounty Hunter",
#   ability_name: "Bullet Time",
#   ability_icon: "./missfortune",
#   ability_type: "Active",
#   ability_description: "Miss Fortune channels and fires several waves of bullets in a cone targeted at the furthest enemy.",
#   tier: 5,
#   tier_color: tier_color(5),
#   origin_1: "Pirate",
#   character_class_1: "Gunslinger",
#   health: [750, 1170, 2340],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 75,
#   attack_speed: 0.95,
#   attack_range: 3,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(5)
# )
# mordekaiser = Champion.create(
#   id: 32,
#   name: "Mordekaiser",
#   icon: "./mordekaiser",
#   title: "The Iron Revenant",
#   ability_name: "Obliterate",
#   ability_icon: "./mordekaiser",
#   ability_type: "Active",
#   ability_description: "Mordekaiser slams his mace in front him, dealing damage in a line.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Phantom",
#   character_class_1: "Knight",
#   health: [550, 900, 1800],
#   starting_mana: 50,
#   mana_cost: 150,
#   attack_damage: 50,
#   attack_speed: 0.50,
#   attack_range: 1,
#   armor: 40,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# morgana = Champion.create(
#   id: 33,
#   name: "Morgana",
#   icon: "./morgana",
#   title: "The Fallen",
#   ability_name: "Soul Shackles",
#   ability_icon: "./morgana",
#   ability_type: "Active",
#   ability_description: "Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Demon",
#   character_class_1: "Sorcerer",
#   health: [650, 1170, 2340],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 50,
#   attack_speed: 0.60,
#   attack_range: 2,
#   armor: 30,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# nidalee = Champion.create(
#   id: 34,
#   name: "Nidalee",
#   icon: "./nidalee",
#   title: "The Bestial Huntress",
#   ability_name: "Primal Surge",
#   ability_icon: "./nidalee",
#   ability_type: "Active",
#   ability_description: "Nidalee heals herself and the weakest ally, then transforms.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Wild",
#   character_class_1: "Shapeshifter",
#   health: [500, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 85,
#   attack_damage: 50,
#   attack_speed: 0.65,
#   attack_range: 3,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# pantheon = Champion.create(
#   id: 56,
#   name: "Pantheon",
#   icon: "./pantheon",
#   title: "The Unbreakable Spear",
#   ability_name: "Grand Starfall",
#   ability_icon: "./pantheon",
#   ability_type: "Active",
#   ability_description: "Pantheon leaps into the air and crashes down towards the farthest enemy, stunning them in the process. As he lands, Pantheon deals damage to all enemies in his path. Enemies hit burn for additional damage over a few seconds.",
#   tier: 5,
#   tier_color: tier_color(5),
#   origin_1: "Dragon",
#   character_class_1: "Guardian",
#   health: [850, 1530, 3060],
#   starting_mana: 150,
#   mana_cost: 200,
#   attack_damage: 75,
#   attack_speed: 0.75,
#   attack_range: 1,
#   armor: 80,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# poppy = Champion.create(
#   id: 35,
#   name: "Poppy",
#   icon: "./poppy",
#   title: "Keeper of the Hammer",
#   ability_name: "Keeper's Verdict",
#   ability_icon: "./poppy",
#   ability_type: "Active",
#   ability_description: "Poppy brings down her hammer, knocking away and stunning nearby enemies.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Yordle",
#   character_class_1: "Knight",
#   health: [700, 1440, 2880],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 50,
#   attack_speed: 0.50,
#   attack_range: 1,
#   armor: 40,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# pyke = Champion.create(
#   id: 36,
#   name: "Pyke",
#   icon: "./pyke",
#   title: "The Bloodharbor Ripper",
#   ability_name: "Phantom Undertow",
#   ability_icon: "./pyke",
#   ability_type: "Active",
#   ability_description: "Pyke dashes behind the furthest enemy, creating an afterimage that stuns enemies it passes through.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Pirate",
#   character_class_1: "Assassin",
#   health: [600, 1080, 2160],
#   starting_mana: 50,
#   mana_cost: 125,
#   attack_damage: 60,
#   attack_speed: 0.60,
#   attack_range: 1,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# reksai = Champion.create(
#   id: 37,
#   name: "Rek\'Sai",
#   icon: "./reksai",
#   title: "The Void Burrower",
#   ability_name: "Burrow",
#   ability_icon: "./reksai",
#   ability_type: "Active",
#   ability_description: "Rek\'Sai burrows for a short duration becoming untargetable and healing. When Rek\'Sai unburrows she deals damage and knocks up the closest enemy.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Void",
#   character_class_1: "Brawler",
#   health: [650, 1170, 2340],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 50,
#   attack_speed: 0.60,
#   attack_range: 1,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# rengar = Champion.create(
#   id: 38,
#   name: "Rengar",
#   icon: "./rengar",
#   title: "The Pridestalker",
#   ability_name: "Savagery",
#   ability_icon: "./rengar",
#   ability_type: "Active",
#   ability_description: "Rengar leaps to the weakest enemy and stabs them, he then gains an attack speed bonus.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Wild",
#   character_class_1: "Assassin",
#   health: [550, 900, 1980],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 70,
#   attack_speed: 0.60,
#   attack_range: 1,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# sejuani = Champion.create(
#   id: 39,
#   name: "Sejuani",
#   icon: "./sejuani",
#   title: "Fury of the North",
#   ability_name: "Glacial Prison",
#   ability_icon: "./sejuani",
#   ability_type: "Active",
#   ability_description: "Sejuani creates a large glacial storm, stunning enemies within it after a short delay.",
#   tier: 4,
#   tier_color: tier_color(4),
#   origin_1: "Glacial",
#   character_class_1: "Knight",
#   health: [800, 1530, 3060],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 45,
#   attack_speed: 0.55,
#   attack_range: 1,
#   armor: 40,
#   magic_resist: 20,
#   player_damage: player_damage(4)
# )
# shen = Champion.create(
#   id: 40,
#   name: "Shen",
#   icon: "./shen",
#   title: "The Eye of Twilight",
#   ability_name: "Spirit's Refuge",
#   ability_icon: "./shen",
#   ability_type: "Active",
#   ability_description: "Shen creates a zone around himself, allowing allies to dodge all attacks.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Ninja",
#   character_class_1: "Blademaster",
#   health: [700, 1170, 2340],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 65,
#   attack_speed: 0.70,
#   attack_range: 1,
#   armor: 30,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# shyvana = Champion.create(
#   id: 41,
#   name: "Shyvana",
#   icon: "./shyvana",
#   title: "The Half-Dragon",
#   ability_name: "Dragon's Descent",
#   ability_icon: "./shyvana",
#   ability_type: "Active",
#   ability_description: "Shyvana dashes away and transforms. While transformed, Shyvana's attacks become ranged and light the ground on fire.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Dragon",
#   character_class_1: "Shapeshifter",
#   health: [650, 990, 1980],
#   starting_mana: 0,
#   mana_cost: 85,
#   attack_damage: 50,
#   attack_speed: 0.70,
#   attack_range: 1,
#   armor: 30,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# swain = Champion.create(
#   id: 42,
#   name: "Swain",
#   icon: "./swain",
#   title: "The Noxian Grand General",
#   ability_name: "Demonflare",
#   ability_icon: "./swain",
#   ability_type: "Active",
#   ability_description: "Swain transforms, draining health from all nearby enemies.",
#   tier: 5,
#   tier_color: tier_color(5),
#   origin_1: "Demon",
#   origin_2: "Imperial",
#   character_class_1: "Shapeshifter",
#   health: [850, 1530, 3060],
#   starting_mana: 0,
#   mana_cost: 100,
#   attack_damage: 65,
#   attack_speed: 0.65,
#   attack_range: 2,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(5)
# )
# tristana = Champion.create(
#   id: 43,
#   name: "Tristana",
#   icon: "./tristana",
#   title: "The Yordle Gunner",
#   ability_name: "Explosive Charge",
#   ability_icon: "./tristana",
#   ability_type: "Active",
#   ability_description: "Tristana places a bomb on her current target that detonates after 4 attacks, damaging nearby enemies.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Yordle",
#   character_class_1: "Gunslinger",
#   health: [500, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 50,
#   attack_damage: 50,
#   attack_speed: 0.65,
#   attack_range: 4,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# twistedfate = Champion.create(
#   id: 51,
#   name: "Twisted Fate",
#   icon: "./twistedfate",
#   title: "The Card Master",
#   ability_name: "Pick a Card",
#   ability_icon: "./twistedfate",
#   ability_type: "Active",
#   ability_description: "Twisted Fate throws a card that either stuns, deals damage around his target, or restores mana to himself and nearby allies.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Pirate",
#   character_class_1: "Sorcerer",
#   health: [500, 810, 1620],
#   starting_mana: 0,
#   mana_cost: 50,
#   attack_damage: 40,
#   attack_speed: 0.75,
#   attack_range: 3,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# varus = Champion.create(
#   id: 44,
#   name: "Varus",
#   icon: "./varus",
#   title: "The Arrow of Retribution",
#   ability_name: "Piercing Arrow",
#   ability_icon: "./varus",
#   ability_type: "Active",
#   ability_description: "Varus charges and fires an arrow, dealing damage to all enemies in a line.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Demon",
#   character_class_1: "Ranger",
#   health: [500, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 50,
#   attack_speed: 0.70,
#   attack_range: 4,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )
# vayne = Champion.create(
#   id: 45,
#   name: "Vayne",
#   icon: "./vayne",
#   title: "The Night Hunter",
#   ability_name: "Silver Bolts",
#   ability_icon: "./vayne",
#   ability_type: "Passive",
#   ability_description: "Vayne deals bonus true damage every third attack based on the enemy's maximum health.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Noble",
#   character_class_1: "Ranger",
#   health: [550, 990, 1980],
#   starting_mana: 0,
#   mana_cost: 0,
#   attack_damage: 40,
#   attack_speed: 0.70,
#   attack_range: 3,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# veigar = Champion.create(
#   id: 46,
#   name: "Veigar",
#   icon: "./veigar",
#   title: "The Tiny Master of Evil",
#   ability_name: "Primordial Burst",
#   ability_icon: "./veigar",
#   ability_type: "Active",
#   ability_description: "Veigar blasts an enemy with magical energy. This spell instantly kills if the enemy is a lower star level than Veigar.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Yordle",
#   character_class_1: "Sorcerer",
#   health: [500, 810, 1620],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 45,
#   attack_speed: 0.55,
#   attack_range: 3,
#   armor: 20,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# vi = Champion.create(
#   id: 55,
#   name: "Vi",
#   icon: "./vi",
#   title: "The Piltover Enforcer",
#   ability_name: "Assault and Battery",
#   ability_icon: "./twistedfate",
#   ability_type: "Active",
#   ability_description: "Vi targets the farthest enemy and charges towards them, knocking aside and damaging every enemy along the way. Once she gets there, she knocks her target up and damages them.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Hextech",
#   character_class_1: "Brawler",
#   health: [700, 1080, 2160],
#   starting_mana: 75,
#   mana_cost: 150,
#   attack_damage: 55,
#   attack_speed: 0.65,
#   attack_range: 1,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# volibear = Champion.create(
#   id: 47,
#   name: "Volibear",
#   icon: "./volibear",
#   title: "The Thunder's Roar",
#   ability_name: "Thunder Claws",
#   ability_icon: "./volibear",
#   ability_type: "Active",
#   ability_description: "Volibear\'s attacks bounce between enemies.",
#   tier: 3,
#   tier_color: tier_color(3),
#   origin_1: "Glacial",
#   character_class_1: "Brawler",
#   health: [750, 1170, 2340],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 70,
#   attack_speed: 0.65,
#   attack_range: 1,
#   armor: 30,
#   magic_resist: 20,
#   player_damage: player_damage(3)
# )
# warwick = Champion.create(
#   id: 48,
#   name: "Warwick",
#   icon: "./warwick",
#   title: "The Uncaged Wrath of Zaun",
#   ability_name: "Infinite Duress",
#   ability_icon: "./warwick",
#   ability_type: "Active",
#   ability_description: "Warwick pounces onto the lowest health enemy, stunning and damaging them.",
#   tier: 1,
#   tier_color: tier_color(1),
#   origin_1: "Wild",
#   character_class_1: "Brawler",
#   health: [650, 1080, 2160],
#   starting_mana: 0,
#   mana_cost: 150,
#   attack_damage: 50,
#   attack_speed: 0.60,
#   attack_range: 1,
#   armor: 30,
#   magic_resist: 20,
#   player_damage: player_damage(1)
# )
# yasuo = Champion.create(
#   id: 49,
#   name: "Yasuo",
#   icon: "./yasuo",
#   title: "The Unforgiven",
#   ability_name: "Steel Tempest",
#   ability_icon: "./yasuo",
#   ability_type: "Active",
#   ability_description: "Yasuo stabs forward dealing damage. On third cast, Yasuo launches a tornado dealing damage and knocking up enemies in a line.",
#   tier: 5,
#   tier_color: tier_color(5),
#   origin_1: "Exile",
#   character_class_1: "Blademaster",
#   health: [750, 1260, 2520],
#   starting_mana: 0,
#   mana_cost: 25,
#   attack_damage: 75,
#   attack_speed: 1.00,
#   attack_range: 1,
#   armor: 35,
#   magic_resist: 20,
#   player_damage: player_damage(5)
# )
# zed = Champion.create(
#   id: 50,
#   name: "Zed",
#   icon: "./zed",
#   title: "The Master of Shadows",
#   ability_name: "Razor Shuriken",
#   ability_icon: "./zed",
#   ability_type: "Active",
#   ability_description: "Zed fires a shuriken in a line, damaging enemies it passes through.",
#   tier: 2,
#   tier_color: tier_color(2),
#   origin_1: "Ninja",
#   character_class_1: "Assassin",
#   health: [550, 900, 1800],
#   starting_mana: 0,
#   mana_cost: 75,
#   attack_damage: 66,
#   attack_speed: 0.70,
#   attack_range: 1,
#   armor: 25,
#   magic_resist: 20,
#   player_damage: player_damage(2)
# )

#Origins
demon = Team.create(
  id: 1,
  name: "Demon",
  icon: "./demon",
  team_type: "Origin",
  description: "Attacks from Demons have a 40% chance to burn 20 mana from their target and return mana to the attacker.",
  upgrade_1_number: "2:",
  upgrade_1_description: "15 mana returned",
  upgrade_2_number: "4:",
  upgrade_2_description: "30 mana returned",
  upgrade_3_number: "6:",
  upgrade_3_description: "45 mana returned"
)
demon.champions << [aatrox, brand]
dragon = Team.create(
  id: 2,
  name: "Dragon",
  icon: "./dragon",
  team_type: "Origin",
  description: "While 2 Dragons are in play, all Dragons take 75% reduced magic damage"
)
dragon.champions << [aurelion_sol]
exile = Team.create(
  id: 3,
  name: "Exile",
  icon: "./exile",
  team_type: "Origin",
  description: "If an Exile has no adjacent allies at the start of combat, they gain a shield equal to 100% of their health"
)
exile.champions << []
glacial = Team.create(
  id: 4,
  name: "Glacial",
  icon: "./glacial",
  team_type: "Origin",
  description: "Glacials gain a chance to stun for 1.5 seconds with each attack",
  upgrade_1_number: "2:",
  upgrade_1_description: "20% chance",
  upgrade_2_number: "4:",
  upgrade_2_description: "33% chance",
  upgrade_3_number: "6:",
  upgrade_3_description: "50% chance"
)
glacial.champions << [anivia, ashe, braum]
hextech = Team.create(
  id: 24,
  name: "Hextech",
  icon: "./hextech",
  team_type: "Origin",
  description: "At the start of combat, launch a pulse bomb at a random enemy, temporarily disabling nearby enemy items for 7 seconds",
  upgrade_1_number: "2:",
  upgrade_1_description: "Affects units within 1 hex of the bomb",
  upgrade_2_number: "4:",
  upgrade_2_description: "Affects units within 2 hexes of the bomb"
)
hextech.champions << [camille]
imperial = Team.create(
  id: 5,
  name: "Imperial",
  icon: "./imperial",
  team_type: "Origin",
  description: "A select number of Imperials deal double damage",
  upgrade_1_number: "2:",
  upgrade_1_description: "One random Imperial",
  upgrade_2_number: "4:",
  upgrade_2_description: "All Imperials"
)
imperial.champions << []
ninja = Team.create(
  id: 6,
  name: "Ninja",
  icon: "./ninja",
  team_type: "Origin",
  description: "Ninjas gain a flat amount of Attack Damage and Ability Power",
  upgrade_1_number: "1:",
  upgrade_1_description: "This Ninja gains 50 attack damage/ability power",
  upgrade_2_number: "4:",
  upgrade_2_description: "All Ninjas gain 80 attack damage/ability power"
)
ninja.champions << [akali]
noble = Team.create(
  id: 7,
  name: "Noble",
  icon: "./noble",
  team_type: "Origin",
  description: "Grants 50 armor/magic resist and basic attacks restore 30 health",
  upgrade_1_number: "3:",
  upgrade_1_description: "A random ally",
  upgrade_2_number: "6:",
  upgrade_2_description: "All allies"
)
noble.champions << []
phantom = Team.create(
  id: 8,
  name: "Phantom",
  icon: "./phantom",
  team_type: "Origin",
  description: "While 2 Phantoms are in play, a random enemy will begin combat with 100 health",
)
phantom.champions << []
pirate = Team.create(
  id: 9,
  name: "Pirate",
  icon: "./pirate",
  team_type: "Origin",
  description: "While 3 Pirates are in play, you begin each PvP round with a chest that grants between 0 and 4 gold"
)
pirate.champions << []
robot = Team.create(
  id: 10,
  name: "Robot",
  icon: "./robot",
  team_type: "Origin",
  description: "Robots start combat at full mana"
)
robot.champions << [blitzcrank]
void = Team.create(
  id: 11,
  name: "Void",
  icon: "./void",
  team_type: "Origin",
  description: "A select number of Voidlings deal true damage",
  upgrade_1_number: "2:",
  upgrade_1_description: "One random Voidling",
  upgrade_2_number: "4:",
  upgrade_2_description: "All Voidlings"
)
void.champions << [cho_gath]
wild = Team.create(
  id: 12,
  name: "Wild",
  icon: "./wild",
  team_type: "Origin",
  description: "Wildlings generate Fury on-hit, up to 5. Each stack gives 10% attack speed",
  upgrade_1_number: "2:",
  upgrade_1_description: "Fury benefits all allied Wildlings",
  upgrade_2_number: "4:",
  upgrade_2_description: "Fury benefits all allies and their attacks cannot be dodged"
)
wild.champions << [ahri]
yordle = Team.create(
  id: 13,
  name: "Yordle",
  icon: "./yordle",
  team_type: "Origin",
  description: "Yordles gain a chance to dodge enemy attacks",
  upgrade_1_number: "3:",
  upgrade_1_description: "30% chance",
  upgrade_2_number: "6:",
  upgrade_2_description: "60% chance",
  upgrade_3_number: "9:",
  upgrade_3_description: "90% chance"
)
yordle.champions << []

#Classes
assassin = Team.create(
  id: 14,
  name: "Assassin",
  icon: "./assassin",
  team_type: "Class",
  description: "Assassins gain bonus critical strike damage and chance",
  upgrade_1_number: "2:",
  upgrade_1_description: "+75% damage/+5% chance",
  upgrade_2_number: "6:",
  upgrade_2_description: "+150% damage/+20% chance",
  upgrade_3_number: "9:",
  upgrade_3_description: "+225% damage/+30% chance"
)
assassin.champions << [akali]
blademaster = Team.create(
  id: 15,
  name: "Blademaster",
  icon: "./blademaster",
  team_type: "Class",
  description: "Blademasters gain a 45% chance to perform a multi-attack",
  upgrade_1_number: "3:",
  upgrade_1_description: "Double strike",
  upgrade_2_number: "6:",
  upgrade_2_description: "Triple strike",
  upgrade_3_number: "9:",
  upgrade_3_description: "Quadruple Strike"
)
blademaster.champions << [aatrox, camille]
brawler = Team.create(
  id: 16,
  name: "Brawler",
  icon: "./brawler",
  team_type: "Class",
  description: "Brawlers gain additional maximum health",
  upgrade_1_number: "2:",
  upgrade_1_description: "+250 maximum health",
  upgrade_2_number: "4:",
  upgrade_2_description: "+500 maximum health",
  upgrade_3_number: "6:",
  upgrade_3_description: "+900 maximum health"
)
brawler.champions << [blitzcrank, cho_gath]
elementalist = Team.create(
  id: 17,
  name: "Elementalist",
  icon: "./elementalist",
  team_type: "Class",
  description: "Beginning combat with 3 Elementalists will summon an Elemental adjacent to one of your Elementalists"
)
elementalist.champions << [anivia, brand]
guardian = Team.create(
  id: 18,
  name: "Guardian",
  icon: "./guardian",
  team_type: "Class",
  description: "Beginning combat with 2 Guardians will grant 45 armor to all units that start adjacent to a Guardian"
)
guardian.champions << [braum]
gunslinger = Team.create(
  id: 19,
  name: "Gunslinger",
  icon: "./gunslinger",
  team_type: "Class",
  description: "Gunslingers gain a 50% chance for their attacks to hit additional enemies",
  upgrade_1_number: "2:",
  upgrade_1_description: "Attacks hit one additional random enemy",
  upgrade_2_number: "4:",
  upgrade_2_description: "Attacks hit two additional random enemies",
  upgrade_3_number: "6:",
  upgrade_3_description: "Attacks hit four additional random enemies"
)
gunslinger.champions << []
knight = Team.create(
  id: 20,
  name: "Knight",
  icon: "./knight",
  team_type: "Class",
  description: "All allies ignore a flat amount of damage from all sources",
  upgrade_1_number: "2:",
  upgrade_1_description: "15 damage ignored",
  upgrade_2_number: "4:",
  upgrade_2_description: "35 damage ignored",
  upgrade_3_number: "6:",
  upgrade_3_description: "60 damage ignored"
)
knight.champions << []
ranger = Team.create(
  id: 21,
  name: "Ranger",
  icon: "./ranger",
  team_type: "Class",
  description: "Every 3 seconds, Rangers have a chance to gain double attack speed for 3 seconds",
  upgrade_1_number: "2:",
  upgrade_1_description: "25% chance",
  upgrade_2_number: "4:",
  upgrade_2_description: "75% chance"
)
ranger.champions << [ashe]
shapeshifter = Team.create(
  id: 22,
  name: "Shapeshifter",
  icon: "./shapeshifter",
  team_type: "Class",
  description: "Shapeshifters gain bonus health and heal for that amount when activating their Special Ability",
  upgrade_1_number: "3:",
  upgrade_1_description: "60% bonus health",
  upgrade_2_number: "6:",
  upgrade_2_description: "100% bonus health"
)
shapeshifter.champions << []
sorcerer = Team.create(
  id: 23,
  name: "Sorcerer",
  icon: "./sorcerer",
  team_type: "Class",
  description: "Sorcerers grant bonus spell power to their team",
  upgrade_1_number: "3:",
  upgrade_1_description: "+40% bonus spell power",
  upgrade_2_number: "6:",
  upgrade_2_description: "+100% bonus spell power",
  upgrade_3_number: "9:",
  upgrade_3_description: "+175% bonus spell power"
)
sorcerer.champions << [ahri, aurelion_sol]
