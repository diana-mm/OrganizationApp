class RoomTasksController < ApplicationController
    def index
        @room_tasks = RoomTask.all
        render json: @room_tasks
    end

    def show
        @room_task = RoomTask.find(params[:id])
        render json: @room_task
    end

    def create
        @room_task = RoomTask.create(
            room_id: params[:room_id],
            task_id: params[:task_id]
        )
        render json @room_task
    end

    def destroy
        @room_task = RoomTask.find(params[:id])
        @room_task.destroy
    end
end
