class TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: @tasks, include:[:rooms, :room_tasks]
    end

    def show
        @task = Task.find(params[:id])
        render json: @task, include:[:rooms, :room_tasks]
    end

    def create
        @task = Task.create(
            name: params[:name],
            description: params[:description],
            status: params[:status],
        )
        @roomTask = RoomTask.create(
            room_id: params[:room_id],
            task: @task
        )
        render json: @task, include: [:rooms]
    end
    
    def update
        @task = Task.find_by(params[:id])
        Task.update
    end

    private

    def cleaner_params
        params.require(:cleaner).permit(room_id: [])
    end

end
