class CreateSummoner < ActiveRecord::Migration[5.2]
  def change
    create_table :summoners do |t|
      t.string :summoner_id, null: false
      t.string :key, null: false
      t.string :name, null: false
      t.string :region, null: false
      t.string :icon, null: false
      t.json :ranked_data, null: false
      t.timestamps
    end
  end
end
