class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :key, :name, :title, :origins, :classes, :cost, :ability, :stats, :items, :season, :traits
  has_many :traits, serializer: TraitSerializer
end
