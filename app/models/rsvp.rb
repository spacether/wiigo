# == Schema Information
#
# Table name: rsvps
#
#  id         :integer          not null, primary key
#  event_id   :integer          not null
#  user_id    :integer          not null
#  going      :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rsvp < ApplicationRecord
  validates :event, :user, :going, presence: true
  validates :event_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :event
end
