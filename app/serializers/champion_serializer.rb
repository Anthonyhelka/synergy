class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :icon, :tier, :tier_color, :ability_name, :ability_icon, :ability_description, :teams, :health, :mana, :attack_damage, :attack_speed, :attack_range, :armor, :magic_resist, :player_damage
  has_many :teams, serializer: TeamSerializer
end
