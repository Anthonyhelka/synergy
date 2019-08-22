class CreateChampion < ActiveRecord::Migration[5.2]
  def change
    create_table :champions do |t|
      t.string :name, null: false
      t.string :icon, null: false
      t.string :ability_name, null: false
      t.string :ability_icon, null: false
      t.string :ability_type, null: false
      t.string :ability_description, null: false
      t.integer :tier, null: false
      t.string :tier_color, null: false
      t.string :origin_1, null: false
      t.string :origin_2
      t.string :character_class_1, null: false
      t.string :character_class_2
      t.integer :health, array: true, default: [], null: false
      t.integer :starting_mana, null: false
      t.integer :mana_cost, null: false
      t.integer :attack_damage, null: false
      t.float :attack_speed, null: false
      t.integer :attack_range, null: false
      t.integer :armor, null: false
      t.integer :magic_resist, null: false
      t.integer :player_damage, array: true, default: [], null: false
    end
  end
end
