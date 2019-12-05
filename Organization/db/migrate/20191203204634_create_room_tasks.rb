class CreateRoomTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :room_tasks do |t|
      t.references :room
      t.references :task
      t.boolean :task_status

      t.timestamps
    end
  end
end
