class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :icon, :tier, :tier_color, :ability_name, :ability_icon, :ability_description, :teams
  has_many :teams, serializer: TeamSerializer
end
