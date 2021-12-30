class CreateBabies < ActiveRecord::Migration[6.1]
  def change
    create_table :babies do |t|
      t.string :name

      t.timestamps
    end
  end
end
