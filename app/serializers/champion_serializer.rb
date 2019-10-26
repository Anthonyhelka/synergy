class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :key, :name, :title, :origins, :classes, :cost, :ability, :stats, :items, :active, :traits
  has_many :traits, serializer: TraitSerializer
end
