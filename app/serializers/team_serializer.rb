class TeamSerializer < ActiveModel::Serializer
  attributes :id, :key, :name, :trait_type, :description, :upgrades, :champions
  has_many :champions, serializer: ChampionSerializer
end
