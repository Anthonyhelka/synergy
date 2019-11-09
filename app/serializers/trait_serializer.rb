class TraitSerializer < ActiveModel::Serializer
  attributes :id, :key, :name, :trait_type, :description, :upgrades, :season, :champions
  has_many :champions, serializer: ChampionSerializer
end
