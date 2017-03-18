# == Schema Information
#
# Table name: grouptopics
#
#  id         :integer          not null, primary key
#  group_id   :integer          not null
#  topic_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class GrouptopicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
