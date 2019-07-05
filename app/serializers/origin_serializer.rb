class OriginSerializer < ActiveModel::Serializer
  attributes :id, :name, :desciption
  has_many :champions, serializer: ChampionSerializer
end
