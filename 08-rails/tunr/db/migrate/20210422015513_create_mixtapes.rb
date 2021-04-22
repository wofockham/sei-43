class CreateMixtapes < ActiveRecord::Migration[5.2]
  def change
    create_table :mixtapes do |t|
      t.text :title
      t.integer :user_id

      t.timestamps
    end
  end
end
