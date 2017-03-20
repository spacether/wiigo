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
  validates :title, :description, :image_url, presence: true
  validates :title, uniqueness: true
  validates :search_path, presence: true, allow_blank: true, uniqueness: true

end
