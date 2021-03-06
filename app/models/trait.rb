class Trait < ApplicationRecord
  belongs_to :season
  has_and_belongs_to_many :champions

  validates :key, presence: true
  validates :name, presence: true
  validates :trait_type, presence: true
  validates :description, presence: true
end
