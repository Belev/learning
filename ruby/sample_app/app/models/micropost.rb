class Micropost < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :user

  validates_presence_of :content
  validates_length_of :content, maximum: 140

  default_scope -> { order(created_at: :desc) }
end
