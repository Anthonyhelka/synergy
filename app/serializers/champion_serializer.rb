class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :icon, :title, :tier, :tier_color, :ability_name, :ability_icon, :ability_type, :ability_description, :health, :starting_mana, :mana_cost, :attack_damage, :attack_speed, :attack_range, :armor, :magic_resist, :player_damage, :teams
  has_many :teams, serializer: TeamSerializer
end
