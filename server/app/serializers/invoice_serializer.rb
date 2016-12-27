class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :invoice_date, :due_date, :notes,
             :client_id, :currency_id,
             :invoice_number, :invoice_lines,
             :account_id, :total_amount, :total_tax

  has_many :invoice_lines
end
