# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  group_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :user, :group, presence: true
  validates :group_id, uniqueness: { scope: :user_id }

  belongs_to :group
  belongs_to :user

end
