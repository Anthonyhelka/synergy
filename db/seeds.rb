Champion.delete_all
Trait.delete_all

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
      attack_speed: 0.65,
      dps: 42,
      range: 1
    },
    defense: {
      health: 700,
      armor: 35,
      magic_resist: 20
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
      attack_speed: 0.55,
      dps: 28,
      range: 3
    },
    defense: {
      health: 450,
      armor: 20,
      magic_resist: 20
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
      attack_speed: 0.80,
      dps: 53,
      range: 1
    },
    defense: {
      health: 650,
      armor: 20,
      magic_resist: 20
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
      attack_speed: 0.80,
      dps: 24,
      range: 3
    },
    defense: {
      health: 750,
      armor: 20,
      magic_resist: 20
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
      attack_speed: 0.70,
      dps: 42,
      range: 4
    },
    defense: {
      health: 550,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
aurelionsol = Champion.create(
  id: 6,
  key: "aurelionsol",
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
      attack_speed: 0.60,
      dps: 24,
      range: 3
    },
    defense: {
      health: 650,
      armor: 20,
      magic_resist: 20
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
      attack_speed: 0.50,
      dps: 25,
      range: 1
    },
    defense: {
      health: 650,
      armor: 35,
      magic_resist: 20
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
      attack_speed: 0.60,
      dps: 36,
      range: 3
    },
    defense: {
      health: 700,
      armor: 25,
      magic_resist: 20
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
      attack_speed: 0.60,
      dps: 24,
      range: 1
    },
    defense: {
      health: 650,
      armor: 75,
      magic_resist: 20
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
      attack_speed: 0.60,
      dps: 30,
      range: 1
    },
    defense: {
      health: 550,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
chogath = Champion.create(
  id: 10,
  key: "chogath",
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
      attack_speed: 0.60,
      dps: 39,
      range: 1
    },
    defense: {
      health: 1000,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
darius = Champion.create(
  id: 11,
  key: "darius",
  name: "Darius",
  title: "The Hand of Noxus",
  origins: ["Imperial"],
  classes: ["Knight"],
  cost: 1,
  ability: {
    name: "Decimate",
    description: "Darius swings his axe, damaging nearby enemies and healing himself based off his missing health.",
    type: "Active",
    mana_cost: 100,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "150 / 225 / 300"
      },
      {
        type: "Heal",
        value: "100 / 150 / 200",
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.50,
      dps: 25,
      range: 1
    },
    defense: {
      health: 600,
      armor: 40,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
draven = Champion.create(
  id: 12,
  key: "draven",
  name: "Draven",
  title: "The Glorious Executioner",
  origins: ["Imperial"],
  classes: ["Blademaster"],
  cost: 4,
  ability: {
    name: "Spinning Axes",
    description: "Draven equips a Spinning Axe, dealing bonus on-hit damage. Stacks up to two times.",
    type: "Active",
    mana_cost: 50,
    mana_start: 0,
    stats: [
      {
        type: "Attack Damage Multiplier",
        value: "150% / 200% / 250%"
      }
    ]
  },
  stats: {
    offense: {
      damage: 70,
      attack_speed: 0.75,
      dps: 49,
      range: 3
    },
    defense: {
      health: 650,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
elise = Champion.create(
  id: 13,
  key: "elise",
  name: "Elise",
  title: "The Spider Queen",
  origins: ["Demon"],
  classes: ["Shapeshifter"],
  cost: 1,
  ability: {
    name: "Spider Form",
    description: "Elise summons Spiderlings and transforms, gaining Lifesteal.",
    type: "Active",
    mana_cost: 100,
    mana_start: 0,
    stats: [
      {
        type: "Life Steal",
        value: "60% / 90% / 120%"
      },
      {
        type: "Number of Spiderlings",
        value: "1 / 2 / 4"
      },
      {
        type: "Spiderling Attack Damage",
        value: "60"
      }
    ]
  },
  stats: {
    offense: {
      damage: 45,
      attack_speed: 0.6,
      dps: 40,
      range: 2
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
evelynn = Champion.create(
  id: 14,
  key: "evelynn",
  name: "Evelynn",
  title: "Agony's Embrace",
  origins: ["Demon"],
  classes: ["Assassin"],
  cost: 3,
  ability: {
    name: "Last Caress",
    description: "Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against low health enemies.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "200 / 300 / 400"
      },
      {
        type: "Damage Multiplier",
        value: "3x / 4x / 5x"
      },
      {
        type: "Execute Threshhold",
        value: "50%"
      }
    ]
  },
  stats: {
    offense: {
      damage: 70,
      attack_speed: 0.6,
      dps: 50,
      range: 1
    },
    defense: {
      health: 550,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
fiora = Champion.create(
  id: 15,
  key: "fiora",
  name: "Fiora",
  title: "The Grand Duelist",
  origins: ["Noble"],
  classes: ["Blademaster"],
  cost: 1,
  ability: {
    name: "Riposte",
    description: "Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "100 / 250 / 400"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attack_speed: 1.0,
      dps: 28,
      range: 1
    },
    defense: {
      health: 450,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
gangplank = Champion.create(
  id: 16,
  key: "gangplank",
  name: "Gangplank",
  title: "The Saltwater Scourge",
  origins: ["Pirate"],
  classes: ["Blademaster", "Gunslinger"],
  cost: 3,
  ability: {
    name: "Powder Kegs",
    description: "Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies. Applies on hit effects.",
    type: "Active",
    mana_cost: 100,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "150 / 250 / 350"
      }
    ]
  },
  stats: {
    offense: {
      damage: 60,
      attack_speed: 0.65,
      dps: 33,
      range: 1
    },
    defense: {
      health: 700,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
garen = Champion.create(
  id: 17,
  key: "garen",
  name: "Garen",
  title: "The Might of Demacia",
  origins: ["Noble"],
  classes: ["Knight"],
  cost: 1,
  ability: {
    name: "Judgement",
    description: "Garen rapidly spins his sword around his body, becoming immune to magic damage and dealing damage to nearby enemies.",
    type: "Active",
    mana_cost: 100,
    mana_start: 0,
    stats: [
      {
        type: "Damage per Spin",
        value: "40 / 65 / 90"
      },
      {
      type: "Total Spins",
      value: "9"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.60,
      dps: 30,
      range: 1
    },
    defense: {
      health: 600,
      armor: 40,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
gnar = Champion.create(
  id: 18,
  key: "gnar",
  name: "Gnar",
  title: "The Missing Link",
  origins: ["Wild", "Yordle"],
  classes: ["Shapeshifter"],
  cost: 4,
  ability: {
    name: "GNAR!",
    description: "Gnar transforms and jumps behind the furthest enemy, damaging and shoving enemies backwards.",
    type: "Active",
    mana_cost: 100,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "200 / 300 / 400"
      },
      {
        type: "Transform Duration",
        value: "60s"
      },
      {
        type: "Transform Bonus Health",
        value: "250 / 450 / 650"
      },
      {
        type: "Transform Bonus Attack Damage",
        value: "50 / 100 / 150"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.70,
      dps: 31,
      range: 2
    },
    defense: {
      health: 700,
      armor: 30,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
graves = Champion.create(
  id: 19,
  key: "graves",
  name: "Graves",
  title: "The Outlaw",
  origins: ["Pirate"],
  classes: ["Gunslinger"],
  cost: 1,
  ability: {
    name: "Buckshot",
    description: "Graves' attacks deal increased damage and hit all enemies in front of him.",
    type: "Passive",
    mana_cost: 0,
    mana_start: 0,
    stats: [
      {
        type: "Bonus Damage",
        value: "5% / 10% / 15%"
      }
    ]
  },
  stats: {
    offense: {
      damage: 55,
      attack_speed: 0.55,
      dps: 28,
      range: 1
    },
    defense: {
      health: 450,
      armor: 30,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
jayce = Champion.create(
  id: 53,
  key: "jayce",
  name: "Jayce",
  title: "The Defender of Tomorrow",
  origins: ["Hextech"],
  classes: ["Shapeshifter"],
  cost: 2,
  ability: {
    name: "Mercury Cannon",
    description: "Jayce knocks away an enemy in melee range, dealing damage and stunning them. He then transforms his hammer into a cannon, increasing his attack range and gaining max attack speed for a number of attacks.",
    type: "Active",
    mana_cost: 50,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "200 / 350 / 500"
      },
      {
        type: "Stun Duration",
        value: "2.5s / 4.25s / 6s"
      },
      {
        type: "Attacks",
        value: "3 / 5 / 7"
      }
    ]
  },
  stats: {
    offense: {
      damage: 55,
      attack_speed: 0.70,
      dps: 39,
      range: 1
    },
    defense: {
      health: 600,
      armor: 35,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
jinx = Champion.create(
  id: 54,
  key: "jinx",
  name: "Jinx",
  title: "The Loose Cannon",
  origins: ["Hextech"],
  classes: ["Gunslinger"],
  cost: 4,
  ability: {
    name: "Get Excited!",
    description: "Jinx gets excited as she participates in kills. On her first takedown, she gains attack speed. On her second, she swaps to her rocket launcher causing her attacks to deal bonus area damage.",
    type: "Passive",
    mana_cost: 0,
    mana_start: 0,
    stats: [
      {
        type: "Area Damage",
        value: "100 / 200 / 300"
      },
      {
        type: "Attack Speed",
        value: "60% / 80% / 100%"
      }
    ]
  },
  stats: {
    offense: {
      damage: 75,
      attack_speed: 0.70,
      dps: 49,
      range: 3
    },
    defense: {
      health: 550,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
kaisa = Champion.create(
  id: 57,
  key: "kaisa",
  name: "Kai'Sa",
  title: "Daughter of the Void",
  origins: ["Void"],
  classes: ["Assassin", "Ranger"],
  cost: 5,
  ability: {
    name: "Killer Instinct",
    description: "Kai'Sa dashes to the farthest enemy unit, gaining a shield and Attack Speed for 3 seconds.",
    type: "Active",
    mana_cost: 125,
    mana_start: 50,
    stats: [
      {
        type: "Attack Speed",
        value: "50% / 75% / 100%"
      },
      {
        type: "Shield Amount",
        value: "400 / 700 / 1000"
      }
    ]
  },
  stats: {
    offense: {
      damage: 55,
      attack_speed: 1.25,
      dps: 69,
      range: 2
    },
    defense: {
      health: 700,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
karthus = Champion.create(
  id: 20,
  key: "karthus",
  name: "Karthus",
  title: "The Deathsinger",
  origins: ["Phantom"],
  classes: ["Sorcerer"],
  cost: 5,
  ability: {
    name: "Requiem",
    description: "Karthus deals damage to a number of random enemies after a long channel.",
    type: "Active",
    mana_cost: 125,
    mana_start: 40,
    stats: [
      {
        type: "Damage",
        value: "350 / 600 / 850"
      },
      {
        type: "Targets",
        value: "5 / 7 / 9"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attack_speed: 0.65,
      dps: 42,
      range: 3
    },
    defense: {
      health: 850,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
kassadin = Champion.create(
  id: 21,
  key: "kassadin",
  name: "Kassadin",
  title: "The Void Walker",
  origins: ["Void"],
  classes: ["Sorcerer"],
  cost: 1,
  ability: {
    name: "Nether Blade",
    description: "Kassadin's attacks steal mana from enemies, converting it into a shield.",
    type: "Passive",
    mana_cost: 0,
    mana_start: 0,
    stats: [
      {
        type: "Shield Duration",
        value: "4s"
      },
      {
        type: "Mana Steal",
        value: "25 / 50 / 75"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attack_speed: 0.55,
      dps: 29,
      range: 1
    },
    defense: {
      health: 550,
      armor: 35,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
katarina = Champion.create(
  id: 22,
  key: "katarina",
  name: "Katarina",
  title: "The Sinister Blade",
  origins: ["Imperial"],
  classes: ["Assassin"],
  cost: 3,
  ability: {
    name: "Death Lotus",
    description: "Katarina channels and fires daggers at a number of nearby enemies, dealing damage and reducing healing.",
    type: "Active",
    mana_cost: 85,
    mana_start: 0,
    stats: [
      {
        type: "Damage Per Tick",
        value: "45 / 70 / 95"
      },
      {
        type: "Targets",
        value: "4 / 6 / 8"
      },
      {
        type: "Channel Duration",
        value: "2.5s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attack_speed: 0.60,
      dps: 30,
      range: 1
    },
    defense: {
      health: 450,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
kayle = Champion.create(
  id: 23,
  key: "kayle",
  name: "Kayle",
  title: "The Righteous",
  origins: ["Noble"],
  classes: ["Knight"],
  cost: 5,
  ability: {
    name: "Divine Judgement",
    description: "Kayle shields an ally, making them immune to damage.",
    type: "Active",
    mana_cost: 125,
    mana_start: 0,
    stats: [
      {
        type: "Shield Duration",
        value: "2s / 2.5s / 3s"
      },
      {
        type: "Extra Targets",
        value: "0 / 1 / 2"
      }
    ]
  },
  stats: {
    offense: {
      damage: 60,
      attack_speed: 1.0,
      dps: 66,
      range: 3
    },
    defense: {
      health: 750,
      armor: 40,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
kennen = Champion.create(
  id: 24,
  key: "kennen",
  name: "Kennen",
  title: "The Heart of the Tempest",
  origins: ["Ninja", "Yordle"],
  classes: ["Elementalist"],
  cost: 3,
  ability: {
    name: "Slicing Maelstrom",
    description: "Kennen summons a storm around him, dealing damage and stunning enemies inside of it.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "225 / 450 / 675"
      },
      {
        type: "Stun Duration",
        value: "1.5s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attack_speed: 0.65,
      dps: 36,
      range: 2
    },
    defense: {
      health: 550,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
khazix = Champion.create(
  id: 25,
  key: "khazix",
  name: "Kha'Zix",
  title: "The Voidreaver",
  origins: ["Void"],
  classes: ["Assassin"],
  cost: 1,
  ability: {
    name: "Taste Their Fear",
    description: "Kha'Zix slashes the closest enemy, dealing bonus damage to enemies that are alone.",
    type: "Active",
    mana_cost: 65,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "150 / 250 / 350"
      },
      {
        type: "Isolation Damage",
        value: "400 / 600 / 800"
      }
    ]
  },
  stats: {
    offense: {
      damage: 55,
      attack_speed: 0.60,
      dps: 30,
      range: 1
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
kindred = Champion.create(
  id: 26,
  key: "kindred",
  name: "Kindred",
  title: "The Eternal Hunters",
  origins: ["Phantom"],
  classes: ["Ranger"],
  cost: 4,
  ability: {
    name: "Lamb's Respite",
    description: "Kindred creates a zone around herself that prevents allies from dying.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Duration",
        value: "3s / 4s / 5s"
      },
      {
        type: "Minimum HP",
        value: "300 / 600 / 900"
      }
    ]
  },
  stats: {
    offense: {
      damage: 60,
      attack_speed: 0.70,
      dps: 36,
      range: 3
    },
    defense: {
      health: 600,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
leona = Champion.create(
  id: 27,
  key: "leona",
  name: "Leona",
  title: "The Radiant Dawn",
  origins: ["Noble"],
  classes: ["Guardian"],
  cost: 4,
  ability: {
    name: "Solar Flare",
    description: "Leona calls down a solar ray, stunning enemies in the center and dealing damage to enemies inside it.",
    type: "Active",
    mana_cost: 100,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "175 / 250 / 325"
      },
      {
        type: "Stun Duration",
        value: "5s / 7s / 9s"
      },
      {
        type: "Stun Delay",
        value: "0.625s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 45,
      attack_speed: 0.55,
      dps: 25,
      range: 1
    },
    defense: {
      health: 800,
      armor: 100,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
lissandra = Champion.create(
  id: 28,
  key: "lissandra",
  name: "Lissandra",
  title: "The Ice Witch",
  origins: ["Glacial"],
  classes: ["Elementalist"],
  cost: 2,
  ability: {
    name: "Frozen Tomb",
    description: "Lissandra encases the target in ice, dealing damage to nearby enemies. When below half HP, Lissandra instead encases herself, becoming untargetable.",
    type: "Active",
    mana_cost: 85,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "175 / 325 / 475"
      },
      {
        type: "Enemy Stun Duration",
        value: "1.5s"
      },
      {
        type: "Untargetable Duration",
        value: "2s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attack_speed: 0.60,
      dps: 24,
      range: 3
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
lucian = Champion.create(
  id: 29,
  key: "lucian",
  name: "Lucian",
  title: "The Purifier",
  origins: ["Noble"],
  classes: ["Gunslinger"],
  cost: 2,
  ability: {
    name: "Relentless Pursuit",
    description: "Lucian dashes away to safety and attacks an enemy twice, once with Attack Damage and once with Spell Damage.",
    type: "Active",
    mana_cost: 35,
    mana_start: 0,
    stats: [
      {
        type: "Second Shot Damage",
        value: "125 / 250 / 375"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attack_speed: 0.65,
      dps: 42,
      range: 3
    },
    defense: {
      health: 600,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
lulu = Champion.create(
  id: 30,
  key: "lulu",
  name: "Lulu",
  title: "The Purifier",
  origins: ["Yordle"],
  classes: ["Sorcerer"],
  cost: 2,
  ability: {
    name: "Wild Growth",
    description: "Lulu grants an ally bonus Health, knocking up enemies near them.",
    type: "Active",
    mana_cost: 150,
    mana_start: 0,
    stats: [
      {
        type: "Bonus Health",
        value: "300 / 400 / 500"
      },
      {
        type: "Duration",
        value: "6s"
      },
      {
        type: "Extra Targets",
        value: "0 / 1 / 2"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.60,
      dps: 30,
      range: 2
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
missfortune = Champion.create(
  id: 31,
  key: "missfortune",
  name: "Miss Fortune",
  title: "The Bounty Hunter",
  origins: ["Pirate"],
  classes: ["Gunslinger"],
  cost: 5,
  ability: {
    name: "Bullet Time",
    description: "Miss Fortune channels and fires several waves of bullets in a cone.",
    type: "Active",
    mana_cost: 150,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "1300 / 2000 / 2700"
      },
      {
        type: "Channel Duration",
        value: "3s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 75,
      attack_speed: 0.95,
      dps: 64,
      range: 3
    },
    defense: {
      health: 750,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
mordekaiser = Champion.create(
  id: 32,
  key: "mordekaiser",
  name: "Mordekaiser",
  title: "The Iron Revenant",
  origins: ["Phantom"],
  classes: ["Knight"],
  cost: 1,
  ability: {
    name: "Obliterate",
    description: "Mordekaiser slams his mace in front him, dealing damage in a line.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "250 / 500 / 750"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.50,
      dps: 25,
      range: 1
    },
    defense: {
      health: 550,
      armor: 40,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
morgana = Champion.create(
  id: 33,
  key: "morgana",
  name: "Morgana",
  title: "The Fallen",
  origins: ["Demon"],
  classes: ["Sorcerer"],
  cost: 3,
  ability: {
    name: "Soul Shackles",
    description: "Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "175 / 300 / 425"
      },
      {
        type: "Stun Duration",
        value: "2s / 4s / 6s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.60,
      dps: 30,
      range: 2
    },
    defense: {
      health: 650,
      armor: 30,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
nidalee = Champion.create(
  id: 34,
  key: "nidalee",
  name: "Nidalee",
  title: "The Bestial Huntress",
  origins: ["Wild"],
  classes: ["Shapeshifter"],
  cost: 1,
  ability: {
    name: "Primal Surge",
    description: "Nidalee heals herself and two allies, then transforms.",
    type: "Active",
    mana_cost: 85,
    mana_start: 0,
    stats: [
      {
        type: "Heal Amount",
        value: "150 / 225 / 600"
      },
      {
        type: "Transform Attack Damage",
        value: "20 / 70 / 120"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.65,
      dps: 33,
      range: 3
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
pantheon = Champion.create(
  id: 56,
  key: "pantheon",
  name: "Pantheon",
  title: "The Unbreakable Spear",
  origins: ["Dragon"],
  classes: ["Guardian"],
  cost: 5,
  ability: {
    name: "Grand Starfall",
    description: "Pantheon leaps in the air, crashing down towards the farthest enemy, stunning them. Enemies in Pantheon's path take % of their Maximum Health as Magic Damage. They then burn for an additional 20% of their Maximum Health as True Damage over 10 seconds. Applies Grievous Wounds.",
    type: "Active",
    mana_cost: 200,
    mana_start: 150,
    stats: [
      {
        type: "Damage",
        value: "10% / 20% 30% Max Health"
      },
      {
        type: "Stun Duration",
        value: "2s / 2s / 2s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 75,
      attack_speed: 0.75,
      dps: 60,
      range: 1
    },
    defense: {
      health: 850,
      armor: 80,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
poppy = Champion.create(
  id: 35,
  key: "poppy",
  name: "Poppy",
  title: "Keeper of the Hammer",
  origins: ["Yordle"],
  classes: ["Knight"],
  cost: 3,
  ability: {
    name: "Keeper's Verdict",
    description: "Poppy brings down her hammer, knocking away and stunning nearby enemies.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "300 / 500 / 700"
      },
      {
        type: "Stun Duration",
        value: "2s / 2s / 2s"
      },
      {
        type: "Number of Targets Hit",
        value: "1 / 2 / 3"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.50,
      dps: 25,
      range: 1
    },
    defense: {
      health: 700,
      armor: 40,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
pyke = Champion.create(
  id: 36,
  key: "pyke",
  name: "Pyke",
  title: "The Bloodharbor Ripper",
  origins: ["Pirate"],
  classes: ["Assassin"],
  cost: 2,
  ability: {
    name: "Phantom Undertow",
    description: "Pyke dashes behind the furthest enemy, creating an afterimage that stuns enemies it passes through.",
    type: "Active",
    mana_cost: 125,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "150 / 200 / 250"
      },
      {
        type: "Stun Duration",
        value: "1.5s / 2s / 2.5s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 60,
      attack_speed: 0.60,
      dps: 36,
      range: 1
    },
    defense: {
      health: 600,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
reksai = Champion.create(
  id: 37,
  key: "reksai",
  name: "Rek'Sai",
  title: "The Void Burrower",
  origins: ["Void"],
  classes: ["Brawler"],
  cost: 2,
  ability: {
    name: "Burrow",
    description: "Rek'Sai burrows for a short duration becoming untargetable and healing. When Rek'Sai unburrows she deals damage and knocks up the closest enemy.",
    type: "Active",
    mana_cost: 150,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "200 / 350 / 500"
      },
      {
        type: "Heal Amount",
        value: "150 / 300 / 450"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.60,
      dps: 26,
      range: 1
    },
    defense: {
      health: 650,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
rengar = Champion.create(
  id: 38,
  key: "rengar",
  name: "Rengar",
  title: "The Pridestalker",
  origins: ["Wild"],
  classes: ["Assassin"],
  cost: 3,
  ability: {
    name: "Savagery",
    description: "Rengar leaps to the lowest health enemy and stabs them for bonus on-hit damage. After dealing damage, Rengar gains Attack Speed and 25% Critical Strike Chance.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Attack Damage Scaling",
        value: "200% / 300% / 400%"
      },
      {
        type: "Attack Speed",
        value: "30% / 50% / 70%"
      },
      {
        type: "Buff Duration",
        value: "6s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 70,
      attack_speed: 0.60,
      dps: 30,
      range: 1
    },
    defense: {
      health: 550,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
sejuani = Champion.create(
  id: 39,
  key: "sejuani",
  name: "Sejuani",
  title: "Fury of the North",
  origins: ["Glacial"],
  classes: ["Knight"],
  cost: 4,
  ability: {
    name: "Glacial Prison",
    description: "Sejuani creates a large glacial storm, stunning enemies within it after a short delay.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "100 / 175 / 250"
      },
      {
        type: "Stun Duration",
        value: "2s / 3.5s / 5s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 45,
      attack_speed: 0.55,
      dps: 25,
      range: 1
    },
    defense: {
      health: 800,
      armor: 40,
      magic_resist: 25
    }
  },
  items: ["WIP"],
  active: true
)
shen = Champion.create(
  id: 40,
  key: "shen",
  name: "Shen",
  title: "The Eye of Twilight",
  origins: ["Ninja"],
  classes: ["Blademaster"],
  cost: 2,
  ability: {
    name: "Spirit's Refuge",
    description: "Shen creates a zone around himself, allowing allies to dodge all attacks.",
    type: "Active",
    mana_cost: 150,
    mana_start: 100,
    stats: [
      {
        type: "Zone Duration",
        value: "3s / 4s / 5s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attack_speed: 0.75,
      dps: 39,
      range: 1
    },
    defense: {
      health: 700,
      armor: 30,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
shyvana = Champion.create(
  id: 41,
  key: "shyvana",
  name: "Shyvana",
  title: "The Half-Dragon",
  origins: ["Dragon"],
  classes: ["Shapeshifter"],
  cost: 3,
  ability: {
    name: "Dragon's Descent",
    description: "Shyvana dashes and transforms, gaining Attack Damage and Attack Range. When transformed, her attacks set enemies on fire.",
    type: "Active",
    mana_cost: 85,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "200 / 300 / 400"
      },
      {
        type: "Transform Attack Damage",
        value: "100 / 150 / 200"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.70,
      dps: 33,
      range: 1
    },
    defense: {
      health: 650,
      armor: 30,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
swain = Champion.create(
  id: 42,
  key: "swain",
  name: "Swain",
  title: "The Noxian Grand General",
  origins: ["Imperial", "Demon"],
  classes: ["Shapeshifter"],
  cost: 5,
  ability: {
    name: "Demonflare",
    description: "Swain transforms, draining health from all nearby enemies. At the end of his transformation, Swain sends out a burst of energy dealing damage to nearby enemies.",
    type: "Active",
    mana_cost: 100,
    mana_start: 0,
    stats: [
      {
        type: "Damage Per Tick",
        value: "40 / 80 / 120"
      },
      {
        type: "Heal Per Tick",
        value: "30 / 60 / 90"
      },
      {
        type: "Soul Flare Damage",
        value: "300 / 600 / 900"
      }
    ]
  },
  stats: {
    offense: {
      damage: 65,
      attack_speed: 0.65,
      dps: 42,
      range: 2
    },
    defense: {
      health: 850,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
tristana = Champion.create(
  id: 43,
  key: "tristana",
  name: "Tristana",
  title: "The Yordle Gunner",
  origins: ["Yordle"],
  classes: ["Gunslinger"],
  cost: 1,
  ability: {
    name: "Explosive Charge",
    description: "Tristana places a bomb on her current target that detonates after 3 attacks, damaging nearby enemies.",
    type: "Active",
    mana_cost: 50,
    mana_start: 0,
    stats: [
      {
        type: "Minimum Damage",
        value: "70 / 110 / 150"
      },
      {
        type: "Maximum Damage",
        value: "175 / 275 / 375"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.65,
      dps: 35,
      range: 4
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
twistedfate = Champion.create(
  id: 51,
  key: "twistedfate",
  name: "Twisted Fate",
  title: "The Card Master",
  origins: ["Pirate"],
  classes: ["Sorcerer"],
  cost: 2,
  ability: {
    name: "Pick a Card",
    description: "Twisted Fate throws a card that either stuns, deals damage around his target, or restores mana to himself and nearby allies.",
    type: "Active",
    mana_cost: 50,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "150 / 250 / 350"
      },
      {
        type: "Stun Duration",
        value: "2s / 3s / 4s"
      },
      {
        type: "Mana Restore",
        value: "30 / 50 / 70"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attack_speed: 0.70,
      dps: 28,
      range: 3
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
varus = Champion.create(
  id: 44,
  key: "varus",
  name: "Varus",
  title: "The Arrow of Retribution",
  origins: ["Demon"],
  classes: ["Ranger"],
  cost: 2,
  ability: {
    name: "Piercing Arrow",
    description: "Varus charges and fires an arrow, dealing damage to all enemies in a line.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "300 / 550 / 800"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.70,
      dps: 35,
      range: 4
    },
    defense: {
      health: 500,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
vayne = Champion.create(
  id: 45,
  key: "vayne",
  name: "Vayne",
  title: "The Night Hunter",
  origins: ["Noble"],
  classes: ["Ranger"],
  cost: 1,
  ability: {
    name: "Silver Bolts",
    description: "Vayne deals bonus true damage every third attack based on the enemy's maximum health.",
    type: "Passive",
    mana_cost: 0,
    mana_start: 0,
    stats: [
      {
        type: "Max Health Damage",
        value: "8% / 12% / 16%"
      }
    ]
  },
  stats: {
    offense: {
      damage: 40,
      attack_speed: 0.70,
      dps: 27,
      range: 3
    },
    defense: {
      health: 550,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
veigar = Champion.create(
  id: 46,
  key: "veigar",
  name: "Veigar",
  title: "The Tiny Master of Evil",
  origins: ["Yordle"],
  classes: ["Sorcerer"],
  cost: 3,
  ability: {
    name: "Primordial Burst",
    description: "Veigar blasts an enemy with magical energy. This spell instantly kills if the enemy is a lower star level than Veigar.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "650 / 650 / 950"
      }
    ]
  },
  stats: {
    offense: {
      damage: 45,
      attack_speed: 0.55,
      dps: 25,
      range: 3
    },
    defense: {
      health: 500,
      armor: 20,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
vi = Champion.create(
  id: 55,
  key: "vi",
  name: "Vi",
  title: "The Piltover Enforcer",
  origins: ["Hextech"],
  classes: ["Brawler"],
  cost: 3,
  ability: {
    name: "Assault and Battery",
    description: "Vi charges down the furthest enemy, knocking aside anyone in her way. When she reaches her target, she deals magic damage and knocks them up. Other enemies knocked aside take the same damage.",
    type: "Active",
    mana_cost: 150,
    mana_start: 75,
    stats: [
      {
        type: "Damage",
        value: "300 / 500 / 700"
      },
      {
        type: "Stun Duration",
        value: "2s / 2.5s / 3s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 55,
      attack_speed: 0.65,
      dps: 36,
      range: 1
    },
    defense: {
      health: 700,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
volibear = Champion.create(
  id: 47,
  key: "volibear",
  name: "Volibear",
  title: "The Thunder's Roar",
  origins: ["Glacial"],
  classes: ["Brawler"],
  cost: 3,
  ability: {
    name: "Thunder Claws",
    description: "Volibear empowers his attacks to chain between enemies, applying on-hit effects.",
    type: "Active",
    mana_cost: 75,
    mana_start: 0,
    stats: [
      {
        type: " Maximum Bounces",
        value: "3 / 4 / 5"
      },
      {
        type: "Chain Damage Multiplier",
        value: "80% / 90% / 100%"
      }
    ]
  },
  stats: {
    offense: {
      damage: 70,
      attack_speed: 0.65,
      dps: 38,
      range: 1
    },
    defense: {
      health: 750,
      armor: 30,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
warwick = Champion.create(
  id: 48,
  key: "warwick",
  name: "Warwick",
  title: "The Uncaged Wrath of Zaun",
  origins: ["Wild"],
  classes: ["Brawler"],
  cost: 1,
  ability: {
    name: "Infinite Duress",
    description: "Warwick pounces onto the lowest health enemy, stunning and damaging them.",
    type: "Active",
    mana_cost: 150,
    mana_start: 50,
    stats: [
      {
        type: "Damage",
        value: "150 / 225 / 300"
      },
      {
        type: "Stun Duration",
        value: "1.5s"
      }
    ]
  },
  stats: {
    offense: {
      damage: 50,
      attack_speed: 0.60,
      dps: 30,
      range: 1
    },
    defense: {
      health: 650,
      armor: 30,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
yasuo = Champion.create(
  id: 49,
  key: "yasuo",
  name: "Yasuo",
  title: "The Unforgiven",
  origins: ["Exile"],
  classes: ["Blademaster"],
  cost: 5,
  ability: {
    name: "Steel Tempest",
    description: "Yasuo stabs forward, damaging two enemies in a line. On the third cast, Yasuo instead launches a tornado dealing damage and knocking up enemies in a line. Applies on hit effects.",
    type: "Active",
    mana_cost: 25,
    mana_start: 0,
    stats: [
      {
        type: "Damage",
        value: "150 / 350 / 550"
      }
    ]
  },
  stats: {
    offense: {
      damage: 75,
      attack_speed: 1.0,
      dps: 65,
      range: 1
    },
    defense: {
      health: 750,
      armor: 35,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)
zed = Champion.create(
  id: 50,
  key: "zed",
  name: "Zed",
  title: "The Master of Shadows",
  origins: ["Ninja"],
  classes: ["Assassin"],
  cost: 2,
  ability: {
    name: "Razor Shuriken",
    description: "Zed fires a shuriken in a line, damaging enemies it passes through.",
    type: "Active",
    mana_cost: 75,
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
      damage: 65,
      attack_speed: 0.70,
      dps: 39,
      range: 1
    },
    defense: {
      health: 550,
      armor: 25,
      magic_resist: 20
    }
  },
  items: ["WIP"],
  active: true
)

#Origins
demon = Trait.create(
  id: 1,
  key: "demon",
  name: "Demon",
  trait_type: "Origin",
  description: "Attacks from Demons have a 40% chance to burn 20 mana from their target and return mana to the attacker",
  upgrades: [
    {
      threshhold: "2",
      description: "15 mana returned"
    },
    {
      threshhold: "4",
      description: "30 mana returned"
    },
    {
      threshhold: "6",
      description: "45 mana returned"
    }
  ],
  active: true
)
demon.champions << [aatrox, brand, elise, evelynn, morgana, swain, varus]
dragon = Trait.create(
  id: 2,
  key: "dragon",
  name: "Dragon",
  trait_type: "Origin",
  description: "While 2 Dragons are in play, all allied Dragons take 75% reduced magic damage",
  upgrades: [],
  active: true
)
dragon.champions << [aurelionsol, pantheon, shyvana]
exile = Trait.create(
  id: 3,
  key: "exile",
  name: "Exile",
  trait_type: "Origin",
  description: "If an Exile has no adjacent allies at the start of combat, they gain a shield equal to 100% of their health",
  upgrades: [],
  active: true
)
exile.champions << [yasuo]
glacial = Trait.create(
  id: 4,
  key: "glacial",
  name: "Glacial",
  trait_type: "Origin",
  description: "Glacials gain a chance to stun for 1.5 seconds with each attack",
  upgrades: [
    {
      threshhold: "2",
      description: "20% chance"
    },
    {
      threshhold: "4",
      description: "33% chance"
    },
    {
      threshhold: "6",
      description: "50% chance"
    }
  ],
  active: true
)
glacial.champions << [anivia, ashe, braum, lissandra, sejuani, volibear]
hextech = Trait.create(
  id: 24,
  key: "hextech",
  name: "Hextech",
  trait_type: "Origin",
  description: "At the start of combat, launch a pulse bomb at a random enemy, temporarily disabling nearby enemy items for 7 seconds",
  upgrades: [
    {
      threshhold: "2",
      description: "Affects units within 1 hex of the bomb"
    },
    {
      threshhold: "4",
      description: "Affects units within 2 hexes of the bomb"
    }
  ],
  active: true
)
hextech.champions << [camille, jayce, jinx, vi]
imperial = Trait.create(
  id: 5,
  key: "imperial",
  name: "Imperial",
  trait_type: "Origin",
  description: "A select number of Imperials deal double damage",
  upgrades: [
    {
      threshhold: "2",
      description: "One random Imperial"
    },
    {
      threshhold: "4",
      description: "All Imperials"
    }
  ],
  active: true
)
imperial.champions << [darius, draven, katarina, swain]
ninja = Trait.create(
  id: 6,
  key: "ninja",
  name: "Ninja",
  trait_type: "Origin",
  description: "Ninjas gain a flat amount of Attack Damage and Ability Power",
  upgrades: [
    {
      threshhold: "1",
      description: "This Ninja gains 50 attack damage/ability power"
    },
    {
      threshhold: "4",
      description: "All Ninjas gain 80 attack damage/ability power"
    }
  ],
  active: true
)
ninja.champions << [akali, kennen, shen, zed]
noble = Trait.create(
  id: 7,
  key: "noble",
  name: "Noble",
  trait_type: "Origin",
  description: "Grants 50 armor/magic resist and basic attacks restore 30 health to a select number of allies",
  upgrades: [
    {
      threshhold: "3",
      description: "A random ally"
    },
    {
      threshhold: "6",
      description: "All allies"
    }
  ],
  active: true
)
noble.champions << [fiora, garen, kayle, leona, lucian, vayne]
phantom = Trait.create(
  id: 8,
  key: "phantom",
  name: "Phantom",
  trait_type: "Origin",
  description: "While 2 Phantoms are in play, a random enemy will begin combat with 100 health",
  upgrades: [],
  active: true
)
phantom.champions << [karthus, kindred, mordekaiser]
pirate = Trait.create(
  id: 9,
  key: "pirate",
  name: "Pirate",
  trait_type: "Origin",
  description: "While 3 Pirates are in play, you begin each PvP round with a chest that grants between 0 and 4 gold",
  upgrades: [],
  active: true
)
pirate.champions << [gangplank, graves, missfortune, pyke, twistedfate]
robot = Trait.create(
  id: 10,
  key: "robot",
  name: "Robot",
  trait_type: "Origin",
  description: "Robots start combat at full mana",
  upgrades: [],
  active: true
)
robot.champions << [blitzcrank]
void = Trait.create(
  id: 11,
  key: "void",
  name: "Void",
  trait_type: "Origin",
  description: "A select number of Voidlings deal true damage",
  upgrades: [
    {
      threshhold: "2",
      description: "One random Voidling"
    },
    {
      threshhold: "4",
      description: "All Voidlings"
    }
  ],
  active: true
)
void.champions << [chogath, kaisa, kassadin, khazix, reksai]
wild = Trait.create(
  id: 12,
  key: "wild",
  name: "Wild",
  trait_type: "Origin",
  description: "Wildlings generate Fury on-hit, up to 5. Each stack gives 10% attack speed",
  upgrades: [
    {
      threshhold: "2",
      description: "Fury benefits all allied Wildlings"
    },
    {
      threshhold: "4",
      description: "Fury benefits all allies and their attacks cannot be dodged"
    }
  ],
  active: true
)
wild.champions << [ahri, gnar, nidalee, rengar, warwick]
yordle = Trait.create(
  id: 13,
  key: "yordle",
  name: "Yordle",
  trait_type: "Origin",
  description: "Yordles gain a chance to dodge enemy attacks",
  upgrades: [
    {
      threshhold: "3",
      description: "30% chance"
    },
    {
      threshhold: "6",
      description: "60% chance"
    },
    {
      threshhold: "9",
      description: "90% chance"
    }
  ],
  active: true
)
yordle.champions << [gnar, kennen, lulu, poppy, tristana, veigar]

#Classes
assassin = Trait.create(
  id: 14,
  key: "assassin",
  name: "Assassin",
  trait_type: "Class",
  description: "Assassins gain bonus critical strike damage and chance",
  upgrades: [
    {
      threshhold: "3",
      description: "+75% damage/+5% chance"
    },
    {
      threshhold: "6",
      description: "+150% damage/+20% chance"
    },
    {
      threshhold: "9",
      description: "+225% damage/+30% chance"
    }
  ],
  active: true
)
assassin.champions << [akali, evelynn, kaisa, katarina, khazix, pyke, rengar, zed]
blademaster = Trait.create(
  id: 15,
  key: "blademaster",
  name: "Blademaster",
  trait_type: "Class",
  description: "Blademasters gain a 45% chance to perform a multi-attack",
  upgrades: [
    {
      threshhold: "3",
      description: "Double strike"
    },
    {
      threshhold: "6",
      description: "Triple strike"
    },
    {
      threshhold: "9",
      description: "Quadruple strike"
    }
  ],
  active: true
)
blademaster.champions << [aatrox, camille, draven, fiora, gangplank, shen, yasuo]
brawler = Trait.create(
  id: 16,
  key: "brawler",
  name: "Brawler",
  trait_type: "Class",
  description: "Brawlers gain additional maximum health",
  upgrades: [
    {
      threshhold: "2",
      description: "+250 maximum health"
    },
    {
      threshhold: "4",
      description: "+500 maximum health"
    },
    {
      threshhold: "6",
      description: "+900 maximum health"
    }
  ],
  active: true
)
brawler.champions << [blitzcrank, chogath, reksai, vi, volibear, warwick]
elementalist = Trait.create(
  id: 17,
  key: "elementalist",
  name: "Elementalist",
  trait_type: "Class",
  description: "When 3 Elementalists are in play, begin combat with an Elemental adjacent to one of your Elementalists",
  upgrades: [],
  active: true
)
elementalist.champions << [anivia, brand, kennen, lissandra]
guardian = Trait.create(
  id: 18,
  key: "guardian",
  name: "Guardian",
  trait_type: "Class",
  description: "When 2 Guardians are in play, grant 45 armor to all units that start adjacent to a Guardian",
  upgrades: [],
  active: true
)
guardian.champions << [braum, leona, pantheon]
gunslinger = Trait.create(
  id: 19,
  key: "gunslinger",
  name: "Gunslinger",
  trait_type: "Class",
  description: "Gunslingers gain a 50% chance for their attacks to hit additional enemies",
  upgrades: [
    {
      threshhold: "2",
      description: "Attacks hit one additional random enemy"
    },
    {
      threshhold: "4",
      description: "Attacks hit two additional random enemy"
    },
    {
      threshhold: "6",
      description: "Attacks hit four additional random enemy"
    }
  ],
  active: true
)
gunslinger.champions << [gangplank, graves, jinx, lucian, missfortune, tristana]
knight = Trait.create(
  id: 20,
  key: "knight",
  name: "Knight",
  trait_type: "Class",
  description: "All allies ignore a flat amount of damage from all sources",
  upgrades: [
    {
      threshhold: "2",
      description: "15 damage ignored"
    },
    {
      threshhold: "4",
      description: "35 damage ignored"
    },
    {
      threshhold: "6",
      description: "60 damage ignored"
    }
  ],
  active: true
)
knight.champions << [darius, garen, kayle, mordekaiser, poppy, sejuani]
ranger = Trait.create(
  id: 21,
  key: "ranger",
  name: "Ranger",
  trait_type: "Class",
  description: "Every 3 seconds, Rangers have a chance to gain double attack speed for 3 seconds",
  upgrades: [
    {
      threshhold: "2",
      description: "25% chance"
    },
    {
      threshhold: "4",
      description: "75% chance"
    }
  ],
  active: true
)
ranger.champions << [ashe, kaisa, kindred, varus, vayne]
shapeshifter = Trait.create(
  id: 22,
  key: "shapeshifter",
  name: "Shapeshifter",
  trait_type: "Class",
  description: "Shapeshifters gain bonus health and heal for that amount when activating their Special Ability",
  upgrades: [
    {
      threshhold: "3",
      description: "60% bonus health"
    },
    {
      threshhold: "6",
      description: "100% bonus health"
    }
  ],
  active: true
)
shapeshifter.champions << [elise, gnar, jayce, nidalee, shyvana, swain]
sorcerer = Trait.create(
  id: 23,
  key: "sorcerer",
  name: "Sorcerer",
  trait_type: "Class",
  description: "Sorcerers grant bonus spell power to their team",
  upgrades: [
    {
      threshhold: "3",
      description: "+40% bonus spell power"
    },
    {
      threshhold: "6",
      description: "100% bonus spell power"
    },
    {
      threshhold: "9",
      description: "+175% bonus spell power"
    }
  ],
  active: true
)
sorcerer.champions << [ahri, aurelionsol, karthus, kassadin, lulu, morgana, twistedfate, veigar]
