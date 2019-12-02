class TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: @tasks
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
        @task = Task.find(params[:id])
        Task.update
    end

    def delete
        @task = Task.find(params[:id])
        Task.destroy
    end
end
