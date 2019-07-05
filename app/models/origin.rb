class Origin < ApplicationRecord
  has_and_belongs_to_many :champions

  validates :name, presence: true
  validates :icon, presence: true
  validates :desciption, presence: true
  validates :upgrade_1, presence: true
end
