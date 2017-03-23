# == Schema Information
#
# Table name: topics
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  dash_topic  :string           not null
#  description :text             not null
#  image_url   :string           not null
#  banner_url  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Topic < ApplicationRecord
  validates :title, :description, :banner_url, presence: true
  validates :title, uniqueness: true
  validates :dash_topic, presence: true, allow_blank: true, uniqueness: true
  validates :image_url, presence: true, allow_blank: true

  has_many :grouptopics
  has_many :groups, through: :grouptopics
end
