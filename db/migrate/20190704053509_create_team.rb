class CreateTeam < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :icon, null: false
      t.string :team_type, null: false
      t.string :description
      t.string :upgrade_1_number
      t.string :upgrade_1_description
      t.string :upgrade_2_number
      t.string :upgrade_2_description
      t.string :upgrade_3_number
      t.string :upgrade_3_description
    end
  end
end
