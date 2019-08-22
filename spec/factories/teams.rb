FactoryBot.define do
  factory :team do
    name { Faker::Team.name  }
    icon { "./demon" }
    teamType { "Class" }
    description { Faker::Hipster.sentences(number: 1) }
  end
end
