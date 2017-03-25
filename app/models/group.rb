# == Schema Information
#
# Table name: groups
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text             not null
#  hometown     :string           not null
#  image_url    :string           not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Group < ApplicationRecord
  validates :name, :description, :hometown, :image_url, :organizer,
            presence: true
  validates :name, uniqueness: true

  belongs_to :organizer, class_name: :User
  has_many :grouptopics, dependent: :destroy
  has_many :topics, through: :grouptopics

  has_many :memberships, dependent: :destroy
  has_many :members, through: :memberships, source: :user

  has_many :events
  has_many :rsvps, through: :events

  after_initialize :ensure_image

  def ensure_image
    self.image_url ||= '1.svg'
  end

  def allmembers
    self.members + [self.organizer]
  end

  def dashName
    self.name.gsub(" ", "-")
  end

  def memberIds
    self.member_ids + [self.organizer.id]
  end

  def newItems
    allrsvps = self.rsvps.map do |rsvp|
      {
        user: {id: rsvp.user.id, username: rsvp.user.username, imageUrl: rsvp.user.image_url},
        action: "RSVPed",
        response: (rsvp.going ? "YES" : "NO"),
        eventId: rsvp.event.id,
        eventTitle: rsvp.event.title,
        time: rsvp.updated_at
      }
    end

    allmemberships = self.memberships.map do |membership|
      {
        user: {id: membership.user.id, username: membership.user.username, imageUrl: membership.user.image_url},
        action: "joined",
        time: membership.created_at
      }
    end

    allitems = (allrsvps + allmemberships)
    allitems.sort_by! { |item| (Time.zone.now  - item[:time]) }
    allitems[0..9]
  end

  def pastEvents
    self.events.where("start_time < ?", DateTime.now)
  end

  def futureEvents
    self.events.where("start_time > ?", DateTime.now)
  end

end
