class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :name, :champions, :traits
  has_many :champions, serializer: ChampionSerializer
  has_many :traits, serializer: TraitSerializer
end
