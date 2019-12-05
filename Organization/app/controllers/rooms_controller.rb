class RoomsController < ApplicationController
    def index
        @rooms = Room.all
        render json: @rooms, include:[:tasks, :room_tasks]
    end

    def show
        @room = Room.find(params[:id])
        render json: @room, include:[:tasks,:room_tasks]
    end

    def create
        @room = Room.create(
            name: params[:name],
            status: 0
        )
        # @roomTask = RoomTask.create(
        #     room: @room,
        #     task_id: #need Kat's Help!!
        # )
        render json: @room
    end
    
    def update
        # byebug
        @room = Room.find_by(params[:id])

        @room.status_boolean(params[:task_id])
        # byebug
        render json: @room

    end  

    def destroy
        @room = Room.find(params[:id])
        @room.destroy
    end

    private

    def cleaner_params
        params.require(:cleaner).permit(room_taks_id: [])
    end

end
