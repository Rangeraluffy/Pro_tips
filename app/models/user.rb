class User < ApplicationRecord
  before_validation :downcase_email
  after_initialize :default_role!

  validates :email, presence: true,
                    uniqueness: true

<<<<<<< HEAD
  has_many :tips, dependent: :destroy
  has_many :comments, dependent: :destroy
=======
  has_many :tips
  has_many :comments
>>>>>>> cd0d6c8df39ca20b102ed4bb2429fcd3b82827b9
  has_and_belongs_to_many :favourites, class_name: Tip.name

#Add the has_secure_password in user class
    has_secure_password

    # Pagination
    paginates_per 6

    # Uploader
    mount_uploader :avatar, AvatarUploader

    private

    def downcase_email
      self.email = email.downcase
    end

    def default_role!
      self.role ||= 'registered'
    end
end
