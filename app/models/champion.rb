class Champion < ApplicationRecord
  has_and_belongs_to_many :teams

  validates :name, presence: true
  validates :icon, presence: true
  validates :title, presence: true
  validates :ability_name, presence: true
  validates :ability_icon, presence: true
  validates :ability_type, presence: true
  validates :ability_description, presence: true
  validates :tier, presence: true
  validates :tier_color, presence: true
  validates :origin_1, presence: true
  validates :character_class_1, presence: true
  validates :health, presence: true
  validates :starting_mana, presence: true
  validates :mana_cost, presence: true
  validates :attack_damage, presence: true
  validates :attack_speed, presence: true
  validates :attack_range, presence: true
  validates :armor, presence: true
  validates :magic_resist, presence: true
  validates :player_damage, presence: true
end
