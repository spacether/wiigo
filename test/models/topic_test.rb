# == Schema Information
#
# Table name: topics
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  search_path :string           not null
#  description :text             not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class TopicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
