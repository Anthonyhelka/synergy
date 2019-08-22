name = ["Demon", "Dragon", "Exile", "Glacial", "Hextech", "Imperial", "Ninja", "Noble", "Phantom", "Pirate", "Robot", "Void", "Wild", "Yordle", "Assassin", "Blademaster", "Brawler", "Elementalist", "Guardian", "Gunslinger", "Knight", "Ranger", "Shapeshifter", "Sorcerer"]
team_type = ["Origin", "Class"]


FactoryBot.define do
  factory :team do
    name { name.sample  }
    icon { "./demon" }
    team_type { team_type.sample }
    description { Faker::Hipster.sentences(number: 1) }
  end
end
