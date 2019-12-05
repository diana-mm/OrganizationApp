class Room < ApplicationRecord
    has_many :room_tasks
    has_many :tasks, through: :room_tasks

    def status_boolean(task_id)
        room_task = self.room_tasks.find_by(task_id: task_id)
        current_status = room_task.task_status
        room_task.update(task_status: !current_status)
        calculate_completion()
    end
    

    def calculate_completion()
        true_task = self.room_tasks.where(task_status: true)
        num_true = true_task.count
        float_true = num_true.to_f
        all_tasks = self.room_tasks.count
        self.status =  (float_true/all_tasks)* 100
        self.update(status: self.status)
    end
end
