class InvoicePresenter
  include ActiveModel::Model

  attr_accessor :invoice_date, :due_date, :notes,
                :client_id, :currency_id,
                :invoice_number, :invoice_lines,
                :account_id

  validate :valid_due_date
  validate :valid_invoice_date
  validate :invoice_lines_not_empty
  validate :absence_of_duplicate_lines, if: -> { !invoice_lines.empty? }

  def save
    Invoice.transaction do
      @invoice = Invoice.create!(invoice_attributes)
      lines = invoice_lines.map do |line|
        p line
        line_presenter = LinePresenter.new(line)
        line_presenter.build(@invoice.id)
      end
      InvoiceLine.create!(lines)
      @invoice.id
    end
  end

  private

  def valid_due_date
    DateTime.parse(due_date) < DateTime.now && errors.add(:due_date, "due date cannot be today's date' or earlier")
  end

  def valid_invoice_date
    DateTime.parse(invoice_date) < DateTime.now && errors.add(:due_date, "invoice date cannot be before today's date'")
  end

  def invoice_lines_not_empty
    if invoice_lines.empty?
      errors.add(:invoice_lines, 'invoice must contain at least one item')
    end
  end

  def absence_of_duplicate_lines
    total_product_count = invoice_lines.count
    uniq_product_count = invoice_lines
                         .select { |line| line[:product_id] }
                         .uniq.count
    msg = 'invoice lines contains duplicate items'
    total_product_count != uniq_product_count && errors.add(:invoice_lines, msg)
  end

  def invoice_attributes
    {
      client_id: client_id,
      due_date: due_date,
      invoice_date: invoice_date,
      currency_id: currency_id,
      invoice_number: invoice_number,
      notes: notes,
      account_id: account_id
    }
  end
end

class LinePresenter
  include ActiveModel::Model

  attr_accessor :invoice_id, :product_id, :description,
                :quantity, :discount_percentage,
                :discount_flat, :price

  def build(invoice_id)
    line_attributes.merge(invoice_id: invoice_id)
  end

  def line_attributes
    {
      product_id: product_id,
      description: description,
      quantity: quantity,
      discount_percentage: discount_percentage,
      discount_flat: discount_flat,
      price: price
    }
  end
end
