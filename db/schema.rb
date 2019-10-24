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
    t.string "key", null: false
    t.string "name", null: false
    t.string "title", null: false
    t.string "origins", default: [], null: false, array: true
    t.string "classes", default: [], null: false, array: true
    t.integer "cost", null: false
    t.json "ability", null: false
    t.json "stats", null: false
    t.string "items", default: [], null: false, array: true
    t.boolean "active", null: false
  end

  create_table "champions_traits", id: false, force: :cascade do |t|
    t.bigint "champion_id", null: false
    t.bigint "trait_id", null: false
    t.index ["champion_id", "trait_id"], name: "index_champions_traits_on_champion_id_and_trait_id"
  end

  create_table "traits", force: :cascade do |t|
    t.string "key", null: false
    t.string "name", null: false
    t.string "trait_type", null: false
    t.string "description", null: false
    t.json "upgrades"
    t.boolean "active", null: false
  end

end
