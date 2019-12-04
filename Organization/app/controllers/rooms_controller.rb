class RoomsController < ApplicationController
    def index
        @rooms = Room.all
        render json: @rooms, include:[:tasks]
    end

    def show
        @room = Room.find(params[:id])
        render json: @room
    end

    def create
        @room = Room.create(
            name: params[:name],
            status: 0
        )
        render json: @room
    end
    
    def update
        @room = Room.find_by(params[:id])
        room.update
    end
end
