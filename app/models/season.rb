class Season < ApplicationRecord
  has_many :champions
  has_many :traits

  validates :name, presence: true
end
