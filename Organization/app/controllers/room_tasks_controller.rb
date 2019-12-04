class RoomTasksController < ApplicationController
    def create
        @room_task = RoomTask.create(
            room_id: params[:room_id]
            task_id: params[:task_id]
        )
        render json @room_task
    end
end
