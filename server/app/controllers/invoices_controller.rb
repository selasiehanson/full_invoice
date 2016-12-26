class InvoicesController < ApplicationController
  def index
    invoices = current_tenant.invoices.includes(:invoice_lines)
    render json: invoices
  end

  def create
    invoice_presenter = InvoicePresenter.new(invoice_params)
    if invoice_presenter.valid?
      invoice_id = invoice_presenter.save
      created_invoice = current_tenant.invoices.find(invoice_id)
      render json: created_invoice, status: :created
    else
      render json: invoice_presenter.errors.messages, status: :unprocessable_entity
    end
  end

  private

  def invoice_params
    params.fetch(:invoice, {})
          .permit(:invoice_date, :dute_date, :notes, :client_id, :currency_id,
                  :invoice_number, :invoice_lines)
  end
end
