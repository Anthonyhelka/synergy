class CreateChampion < ActiveRecord::Migration[5.2]
  def change
    create_table :champions do |t|
      t.string :key, null: false
      t.string :name, null: false
      t.string :title, null: false
      t.string :origins, array: true, default: [], null: false
      t.string :classes, array: true, default: [], null: false
      t.integer :cost, null: false
      t.json :ability, null: false
      t.json :stats, null: false
      t.string :items, array: true, default: [], null: false
      t.boolean :active, null: false
    end
  end
end
