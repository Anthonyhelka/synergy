class Summoner < ApplicationRecord
  validates :summoner_id, presence: true
  validates :region, presence: true
  validates :key, presence: true
  validates :name, presence: true
  validates :icon, presence: true
  validates :ranked_data, presence: true
end
