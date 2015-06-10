class AddPrettyUrlToSite < ActiveRecord::Migration
  def change
    add_column :sites, :prettyUrl, :string
  end
end
