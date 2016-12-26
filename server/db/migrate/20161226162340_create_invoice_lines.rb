class CreateInvoiceLines < ActiveRecord::Migration[5.0]
  def change
    create_table :invoice_lines do |t|
      t.references :invoice, foreign_key: true
      t.references :product, foreign_key: true
      t.string :description
      t.integer :quantity
      t.decimal :discount_percentage
      t.decimal :discount_flat
      t.decimal :price

      t.timestamps
    end
  end
end
