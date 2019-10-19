# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_04_195003) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "champions", force: :cascade do |t|
    t.string "name", null: false
    t.string "icon", null: false
    t.string "title", null: false
    t.string "ability_name", null: false
    t.string "ability_icon", null: false
    t.string "ability_type", null: false
    t.string "ability_description", null: false
    t.integer "tier", null: false
    t.string "tier_color", null: false
    t.string "origin_1", null: false
    t.string "origin_2"
    t.string "character_class_1", null: false
    t.string "character_class_2"
    t.integer "health", default: [], null: false, array: true
    t.integer "starting_mana", null: false
    t.integer "mana_cost", null: false
    t.integer "attack_damage", null: false
    t.float "attack_speed", null: false
    t.integer "attack_range", null: false
    t.integer "armor", null: false
    t.integer "magic_resist", null: false
    t.integer "player_damage", default: [], null: false, array: true
  end

  create_table "champions_teams", id: false, force: :cascade do |t|
    t.bigint "champion_id", null: false
    t.bigint "team_id", null: false
    t.index ["champion_id", "team_id"], name: "index_champions_teams_on_champion_id_and_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "icon", null: false
    t.string "team_type", null: false
    t.string "description"
    t.string "upgrade_1_number"
    t.string "upgrade_1_description"
    t.string "upgrade_2_number"
    t.string "upgrade_2_description"
    t.string "upgrade_3_number"
    t.string "upgrade_3_description"
  end

end
