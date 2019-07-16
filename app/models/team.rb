class Team < ApplicationRecord
  has_and_belongs_to_many :champions

  validates :name, presence: true
  validates :icon, presence: true
  validates :teamType, presence: true
end
