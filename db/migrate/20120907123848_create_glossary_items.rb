class CreateGlossaryItems < ActiveRecord::Migration
  def change
    create_table :glossary_items do |t|
      t.string :Term
      t.string :Description

      t.timestamps
    end
  end
end
