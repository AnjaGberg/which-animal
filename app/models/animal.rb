class Animal < ApplicationRecord
  has_many :names, dependent: :destroy
end
