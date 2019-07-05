class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :icon, :tier, :tier_color, :ability_name, :ability_icon, :ability_description, :origins
  has_many :origins, serializer: OriginSerializer
end
