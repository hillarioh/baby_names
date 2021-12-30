class List < ApplicationRecord
    has_many :babies, dependent: :destroy
end
