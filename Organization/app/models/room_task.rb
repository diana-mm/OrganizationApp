class RoomTask < ApplicationRecord
  belongs_to :room
  belongs_to :task
end
