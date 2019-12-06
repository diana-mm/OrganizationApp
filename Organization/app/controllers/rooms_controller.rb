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
        @room = Room.find(params[:id])
        @room.status_boolean(params[:task_id])
        render json: @room

    end  

    def destroy
        @room = Room.find(params[:id])
        @room.remove_task(params[:task_id])
    end

    private

    def room_params
        params.require(:room).permit(room_taks_id: [])
    end

end
