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
  validates :event, :user, presence: true
  validates_inclusion_of :going, :in => [true, false]
  validates :event_id, uniqueness: { scope: :user_id }

  belongs_to :event
  belongs_to :user

end
