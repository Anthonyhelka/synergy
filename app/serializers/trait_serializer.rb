class TraitSerializer < ActiveModel::Serializer
  attributes :id, :key, :name, :trait_type, :description, :upgrades, :active, :champions
  has_many :champions, serializer: ChampionSerializer
end
