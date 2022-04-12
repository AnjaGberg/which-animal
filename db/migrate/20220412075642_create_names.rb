class CreateNames < ActiveRecord::Migration[6.1]
  def change
    create_table :names do |t|
      t.string :name
      t.references :animal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
