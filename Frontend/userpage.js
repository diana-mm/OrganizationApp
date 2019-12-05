const roomCard = document.querySelector('.steps')
const newRoomForm = document.querySelector('#new-room-form')

fetch(`http://localhost:3000/rooms`)
.then(response => response.json())
.then(rooms => rooms.forEach(room => {
    const roomName = document.createElement('h3')
    const newTask = document.createElement('button')
    const roomStatus = document.createElement('p')
    const roomTasks = document.createElement('li')
    const deleteCard = document.createElement('button')

    
    roomName.innerText = room.name
    roomName.value = room.id
    roomName.id = 'step'
    newTask.innerText = 'new task'
    deleteCard.innerText = 'delete room'
    deleteCard.id = 'delete-button'
    roomStatus.innerText = room.status + "% Completed"
    roomStatus.value = room.status
    

    roomCard.appendChild(roomName)

    newRoomForm.addEventListener('submit', function(event){
        event.preventDefault()

        const roomName = new FormData(event.target)
        const name = roomName.get('name')
        const newRoom = document.createElement('h3')

        newRoom.innerText = name
        newRoom.id = 'step'

        roomCard.appendChild(newRoom, newTask)

        fetch(`http://localhost:3000/rooms`,{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({name})
        }).then(event.target.reset())
    
    })

    room.tasks.map(task => {
        const taskName = document.createElement('p')
        const checkBox = document.createElement('input')
        const deleteButton = document.createElement('button')

        fetch(`http://localhost:3000/tasks/${task.id}`)
            .then(response => response.json())
            .then(task =>{
                task.room_tasks.map(rt => {
                    deleteButton.value = rt.id
                })
                deleteButton.addEventListener('click', function(event) {
                    event.preventDefault()
                    fetch(`http://localhost:3000/room_tasks/${deleteButton.value}`,{
                        method: 'DELETE'
                    })
                    event.target.parentNode.remove()
                })
            })

        roomTasks.id = 'task-list'
        taskName.innerText = task.name
        checkBox.type = 'checkBox'
        checkBox.value = task.id
        newTask.value = task.id
        deleteButton.id = 'task-delete'
        deleteButton.innerText = 'remove'
        
        const currentRoomTasks = room.room_tasks.find(room_task => {
            return room_task.task_id === task.id && room_task.room_id === room.id
        })
        checkBox.checked = currentRoomTasks.task_status

        roomName.append(roomStatus, newTask, roomTasks, deleteCard)
        roomTasks.appendChild(taskName)
        taskName.prepend(checkBox)
        taskName.appendChild(deleteButton)

            checkBox.addEventListener('click', function(event){
                const taskId = checkBox.value
                fetch(`http://localhost:3000/rooms/${roomName.value}`,{
                    method:'PATCH',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({task_id: taskId})
                }).then(response => response.json())
                    .then(room => {
                        roomStatus.innerText = room.status + "% Completed"

                        console.log(room)
                        console.log(roomName)
                    })
                })
            })
    
    newTask.addEventListener('click', function(){
        const formCard = document.createElement('div')
        const taskCard = document.createElement('span')
        const taskForm = document.createElement('form')
        const taskName = document.createElement('input')
        const taskDescription = document.createElement('input') 
        const submit = document.createElement('input')

        formCard.id = 'form-card'
        submit.type = 'submit'
        submit.id = 'submit'

        taskForm.innerText = 'New Task Form'
        formCard.value = room.id 
        taskCard.className = 'close'
        taskCard.innerText = 'close'
        taskName.placeholder = 'Task Name'
        taskDescription.placeholder = 'Task Desctiption'
        submit.innerText = 'Submit'
        
        roomName.appendChild(formCard)
        formCard.append(taskForm,taskCard)
        taskForm.append(taskName, taskDescription, submit)

    
        taskCard.addEventListener('click', function() {
            formCard.style.display = "none";
          })
        
        taskForm.addEventListener('submit', function(event) {
            event.preventDefault()
            const newTask = document.createElement('p')
            const newCheckBox = document.createElement('input')
            const newDeleteButton = document.createElement('button')

            newCheckBox.type = 'checkbox'
            newTask.innerText = taskName.value
            newDeleteButton.id = 'task-delete'
            newDeleteButton.innerText = 'remove'    

            roomTasks.appendChild(newTask)
            newTask.prepend(newCheckBox)
            newTask.appendChild(newDeleteButton)

            fetch(`http://localhost:3000/tasks`,{
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(
                    {name:taskName.value,
                    description:taskDescription.value,
                    status:false,
                    room_id:formCard.value}
                )
            })
            formCard.style.display = 'none'
        })
    }) 
}))


// checkBox.addEventListener('click', {

// modal or create a form and asign it (w, h, z) positions and set default to hidden

//     fetch(`http://localhost:3000/tasks/${task.id}`,
//     method: 'PATCH')
// }