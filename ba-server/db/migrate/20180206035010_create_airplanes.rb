class CreateAirplanes < ActiveRecord::Migration[5.1]
  def change
    create_table :airplanes do |t|
      t.text :name
      t.integer :row
      t.integer :column

      t.timestamps
    end
  end
end
