FactoryBot.define do
  factory :champion do
    name { Faker::Superhero.name }
    icon { "./aatrox"}
    ability_name { Faker::Superhero.power }
    ability_icon { "./aatrox" }
    ability_type { "Active" }
    ability_description { Faker::Hipster.sentences(number: 1) }
    tier { 3 }
    tier_color { "blue" }
    origin_1 { "Demon" }
    character_class_1 { "Blademaster" }
    health { [700, 1350, 2700] }
    starting_mana { 0 }
    mana_cost { 75 }
    attack_damage { 65 }
    attack_speed { 0.65 }
    attack_range { 1 }
    armor { 25 }
    magic_resist { 20 }
    player_damage { [2, 3, 6] }
  end
end
