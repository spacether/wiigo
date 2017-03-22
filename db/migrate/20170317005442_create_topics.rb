class CreateTopics < ActiveRecord::Migration[5.0]
  def change
    create_table :topics do |t|
      t.string :title, null: false
      t.string :dash_topic, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.string :banner_url, null: false
      t.timestamps
      t.index :dash_topic, unique: true
      t.index :title, unique: true
    end
  end
end
