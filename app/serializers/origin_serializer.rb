class OriginSerializer < ActiveModel::Serializer
  attributes :id, :name, :desciption, :icon
  has_many :champions, serializer: ChampionSerializer
end
