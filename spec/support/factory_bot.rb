require "factory_bot_rails"

ability_type = ["Active", "Passive"]
tier = [1, 2, 3, 4, 5]
tier_color = ["white", "green", "blue", "purple", "yellow"]
origin = ["Demon", "Dragon", "Exile", "Glacial", "Hextech", "Imperial", "Ninja", "Noble", "Phantom", "Pirate", "Robot", "Void", "Wild", "Yordle"]
character_class = ["Assassin", "Blademaster", "Brawler", "Elementalist", "Guardian", "Gunslinger", "Knight", "Ranger", "Shapeshifter", "Sorcerer"]
def random_number
  return rand 1..100
end
name = ["Demon", "Dragon", "Exile", "Glacial", "Hextech", "Imperial", "Ninja", "Noble", "Phantom", "Pirate", "Robot", "Void", "Wild", "Yordle", "Assassin", "Blademaster", "Brawler", "Elementalist", "Guardian", "Gunslinger", "Knight", "Ranger", "Shapeshifter", "Sorcerer"]
team_type = ["Origin", "Class"]

FactoryBot.define do
  factory :champion do
    name { Faker::Superhero.name }
    icon { "./aatrox" }
    ability_name { Faker::Superhero.power }
    ability_icon { "./aatrox" }
    ability_type { ability_type.sample }
    ability_description { Faker::Hipster.sentences(number: 1) }
    tier { tier.sample }
    tier_color { tier_color.sample }
    origin_1 { origin.sample }
    character_class_1 { character_class.sample }
    health { [random_number, random_number, random_number] }
    starting_mana { random_number }
    mana_cost { random_number }
    attack_damage { random_number }
    attack_speed { rand 1.0..100.0 }
    attack_range { random_number }
    armor { random_number }
    magic_resist { random_number }
    player_damage { [random_number, random_number, random_number] }
  end

  factory :team do
    name { name.sample  }
    icon { "./demon" }
    team_type { team_type.sample }
    description { Faker::Hipster.sentences(number: 1) }
    champions { [FactoryBot.create(:champion), FactoryBot.create(:champion)]  }
  end
end
