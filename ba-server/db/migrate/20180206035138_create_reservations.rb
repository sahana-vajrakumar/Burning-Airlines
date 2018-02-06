class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :seat_row
      t.text :seat_column
      t.integer :user_id
      t.integer :flight_id

      t.timestamps
    end
  end
end
