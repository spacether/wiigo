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

class Grouptopic < ApplicationRecord
  validates :group, :topic, presence: true
  validates :topic_id, uniqueness: { scope: :group_id }

  belongs_to :group
  belongs_to :topic

end
