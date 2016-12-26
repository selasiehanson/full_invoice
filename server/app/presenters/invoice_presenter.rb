class InvoicePresenter
  include ActiveModel::Model

  attr_accessor :invoice_date, :due_date, :notes,
                :client_id, :currency_id,
                :invoice_number, :invoice_lines

  def save
    Invoice.transaction do
      @invoice = Invoice.create!(invoice_attributes)
      lines = invoice_lines.map do |line|
        line_presenter = InvoicePresenter.new(line)
        line_presenter.build(@invoice.id)
      end
      InvoiceLine.create(lines)
      @invoice.id
    end
  end

  def invoice_attributes
    {
      client_id: :client_id,
      due_date: :due_date,
      invoice_date: :invoice_date,
      currency_id: :currency_id,
      invoice_number: :invoice_number,
      notes: :notes
    }
 end
end

class LinePresenter
  attr_accessor :invoice_id, :product_id, :description,
                :quantity, :discount_percentage,
                :discount_flat, :price

  def build(_invoice_id)
    line_attributes.merge(invoice_id: invoice_id)
  end

  def line_attributes
    {
      invoice_id: :invoice_id,
      product_id: :product_id,
      description: :description,
      quantity: :quantity,
      discount_percentage: :discount_percentage,
      discount_flat: :discount_flat,
      price: :price
    }
  end
end
