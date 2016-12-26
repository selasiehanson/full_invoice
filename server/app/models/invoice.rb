# == Schema Information
#
# Table name: invoices
#
#  id             :integer          not null, primary key
#  account_id     :integer
#  due_date       :datetime
#  invoice_date   :datetime
#  client_id      :integer
#  notes          :text
#  currency_id    :integer
#  invoice_number :string
#  total_amount   :decimal(, )
#  total_tax      :decimal(, )
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_invoices_on_account_id   (account_id)
#  index_invoices_on_client_id    (client_id)
#  index_invoices_on_currency_id  (currency_id)
#

class Invoice < ApplicationRecord
  belongs_to :account
  belongs_to :client
  belongs_to :currency

  has_many :invoice_lines
end