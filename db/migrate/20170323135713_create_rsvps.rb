class CreateRsvps < ActiveRecord::Migration[5.0]
  def change
    create_table :rsvps do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.boolean :going, null: false
      t.index [:event_id, :user_id], unique: true
      t.timestamps
    end
  end
end
