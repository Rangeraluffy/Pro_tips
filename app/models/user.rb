class User < ApplicationRecord
  has_many :tips
  has_many :comments

  has_and_belongs_to_many :favourites, class_name: Tip.name

  validates :email, presence: true,
                    uniqueness: true

#Add the has_secure_password in user class

    has_secure_password
end
