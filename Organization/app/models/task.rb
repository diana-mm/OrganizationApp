class Task < ApplicationRecord
    has_many :room_tasks
    has_many :rooms, through: :room_tasks
end
