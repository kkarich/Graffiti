class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :url
      t.string :canvas

      t.timestamps null: false
    end
  end
end
