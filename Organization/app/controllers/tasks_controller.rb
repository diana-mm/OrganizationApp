class TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: @tasks, include:[:rooms]
    end

    def show
        @task = Task.find(params[:id])
        render json: @task
    end

    def create
        @task = Task.create(
            name: params[:name],
            description: params[:description],
            status: "Start"
        )
        render json: @task
    end
    
    def update
        @task = Task.find_by(params[:id])
        Task.update
    end

    private

    def cleaner_params
        params.require(:cleaner).permit(room_ids: [])
    end

end
