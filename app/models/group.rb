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

  after_initialize :ensure_image_url

  def ensure_image_url
    self.image_url ||= '1.svg'
  end

end
