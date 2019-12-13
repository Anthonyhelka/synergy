require "factory_bot_rails"

FactoryBot.define do
  factory :season do
    id  { 1 }
    name { "1" }
  end

  factory :champion do
    association :season
    key { "aatrox" }
    name { "Aatrox" }
    title { "The Darkin Blade" }
    origins { ["Demon"] }
    classes { ["Blademaster"] }
    cost { 3 }
    ability { {
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
    } }
    stats { {
      offense: {
        damage_scale_factor: 1.80,
        attack_damage: 65,
        attack_speed: 0.65,
        range: 1
      },
      defense: {
        health_scale_factor: 1.80,
        health: 700,
        armor: 35,
        magic_resist: 20
      }
    } }
    items { ["WIP"] }
  end

  factory :team do
    name { name.sample  }
    icon { "./demon" }
    team_type { team_type.sample }
    description { Faker::Hipster.sentences(number: 1) }
    champions { [FactoryBot.create(:champion), FactoryBot.create(:champion)]  }
  end
end
