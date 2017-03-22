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

class Topic < ApplicationRecord
  validates :title, :description, :banner_url, presence: true
  validates :title, uniqueness: true
  validates :dash_topic, presence: true, allow_blank: true, uniqueness: true
  validates :image_url, presence: true, allow_blank: true
end
