class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :key, :name, :title, :origins, :classes, :cost, :ability, :stats, :items, :active, :teams
  has_many :teams, serializer: TeamSerializer
end
