class Trait < ApplicationRecord
  has_and_belongs_to_many :champions

  validates :key, presence: true
  validates :name, presence: true
  validates :trait_type, presence: true
  validates :description, presence: true
  validates :active, presence: true
end
