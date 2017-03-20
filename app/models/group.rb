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

  after_initialize :ensure_image_elim_organizer

  def allmembers
    self.members + [self.organizer]
  end

  def ensure_image_elim_organizer
    self.image_url ||= '1.svg'
    if self.member_ids
      self.member_ids = self.member_ids.reject { |item| item == self.organizer_id }
    end
  end

end
