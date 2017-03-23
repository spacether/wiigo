# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string           not null
#  location        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :session_token, :password_digest,
            :image_url, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :memberships, dependent: :destroy
  has_many :groups, through: :memberships
  has_many :led_groups, foreign_key: :organizer_id, class_name: :Group
  has_many :rsvps, dependent: :destroy

  after_initialize :ensure_session_token

  def self.random
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password ||= password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.random
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.random
    self.image_url ||= "1.svg"
  end

end
