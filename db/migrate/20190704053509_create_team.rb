class CreateTeam < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :key, null: false
      t.string :name, null: false
      t.string :trait_type, null: false
      t.string :description, null: false
      t.json :upgrades
    end
  end
end
