class Room < ApplicationRecord
    has_many :room_tasks
    has_many :tasks, through: :room_tasks
end
