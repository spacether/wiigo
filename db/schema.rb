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

ActiveRecord::Schema.define(version: 20170323135713) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.integer  "group_id",    null: false
    t.string   "title",       null: false
    t.datetime "start_time",  null: false
    t.text     "description", null: false
    t.string   "location",    null: false
    t.string   "address",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["group_id"], name: "index_events_on_group_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name",         null: false
    t.text     "description",  null: false
    t.string   "hometown",     null: false
    t.string   "image_url",    null: false
    t.integer  "organizer_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["name"], name: "index_groups_on_name", unique: true, using: :btree
  end

  create_table "grouptopics", force: :cascade do |t|
    t.integer  "group_id",   null: false
    t.integer  "topic_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id", "topic_id"], name: "index_grouptopics_on_group_id_and_topic_id", unique: true, using: :btree
    t.index ["group_id"], name: "index_grouptopics_on_group_id", using: :btree
    t.index ["topic_id"], name: "index_grouptopics_on_topic_id", using: :btree
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "group_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id", "user_id"], name: "index_memberships_on_group_id_and_user_id", unique: true, using: :btree
    t.index ["group_id"], name: "index_memberships_on_group_id", using: :btree
    t.index ["user_id"], name: "index_memberships_on_user_id", using: :btree
  end

  create_table "rsvps", force: :cascade do |t|
    t.integer  "event_id",   null: false
    t.integer  "user_id",    null: false
    t.boolean  "going",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id", "user_id"], name: "index_rsvps_on_event_id_and_user_id", unique: true, using: :btree
  end

  create_table "topics", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "dash_topic",  null: false
    t.text     "description", null: false
    t.string   "image_url",   null: false
    t.string   "banner_url",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["dash_topic"], name: "index_topics_on_dash_topic", unique: true, using: :btree
    t.index ["title"], name: "index_topics_on_title", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "image_url",       null: false
    t.string   "location"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
