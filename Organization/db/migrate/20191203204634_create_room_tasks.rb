class CreateRoomTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :room_tasks do |t|
      t.references :room
      t.references :task

      t.timestamps
    end
  end
end
