# == Schema Information
#
# Table name: invoice_lines
#
#  id                  :integer          not null, primary key
#  invoice_id          :integer
#  product_id          :integer
#  description         :string
#  quantity            :integer
#  discount_percentage :decimal(, )
#  discount_flat       :decimal(, )
#  price               :decimal(, )
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_invoice_lines_on_invoice_id  (invoice_id)
#  index_invoice_lines_on_product_id  (product_id)
#

require 'test_helper'

class InvoiceLineTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
