class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :icon, :teamType, :desciption, :upgrade_1_number, :upgrade_1_description, :upgrade_2_number, :upgrade_2_description, :upgrade_3_number, :upgrade_3_description
  has_many :champions, serializer: ChampionSerializer
end
