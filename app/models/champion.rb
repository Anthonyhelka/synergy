class Champion < ApplicationRecord
  belongs_to :season
  has_and_belongs_to_many :traits

  validates :key, presence: true
  validates :name, presence: true
  validates :title, presence: true
  validates :origins, presence: true
  validates :classes, presence: true
  validates :cost, presence: true
  validates :ability, presence: true
  validates :stats, presence: true
  validates :items, presence: true
end
