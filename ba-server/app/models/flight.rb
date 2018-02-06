class Flight < ApplicationRecord
  belongs_to :airplane , optional: true
  has_many :users
  has_many :reservations
end
