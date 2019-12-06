const roomCardHolder = document.querySelector('.steps')
const newRoomForm = document.querySelector('#new-room-form')

fetch(`https://ancient-retreat-86627.herokuapp.com/rooms`)
.then(response => response.json())
.then(rooms => rooms.forEach(room => {
    const roomCard = document.createElement('div')
    const roomName = document.createElement('h3')
    const newTask = document.createElement('button')
    const roomStatus = document.createElement('p')
    const roomTasks = document.createElement('li')
    const deleteCard = document.createElement('button')
    const buttonCard = document.createElement('div')

    
    roomName.innerText = room.name
    roomName.value = room.id
    roomCard.id = 'step'
    newTask.innerText = 'new task'
    deleteCard.innerText = 'delete room'
    deleteCard.id = 'delete-button'
    roomStatus.innerText = room.status + "% Completed"
    roomStatus.value = room.status
    roomStatus.id = 'status'
    buttonCard.id = 'button-card'
    
    roomCardHolder.appendChild(roomCard)
    roomCard.appendChild(roomName)
    buttonCard.append(newTask, deleteCard)

    // newRoomForm.addEventListener('submit', function(event){
    //     event.preventDefault()

    //     const roomName = new FormData(event.target)
    //     const name = roomName.get('name')
    //     const newRoom = document.createElement('h3')

    //     newRoom.innerText = name
    //     newRoom.id = 'step'

    //     roomCard.appendChild(newRoom, newTask)

    //     fetch(`https://ancient-retreat-86627.herokuapp.com/rooms`,{
    //         method: 'POST',
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json',
    //         },
    //         body: JSON.stringify({name})
    //     }).then(event.target.reset())
    
    // }) This is a future feature to be added

    room.tasks.map(task => {
        const taskName = document.createElement('p')
        const checkBox = document.createElement('input')
        const deleteButton = document.createElement('button')

        fetch(`https://ancient-retreat-86627.herokuapp.com/tasks/${task.id}`)
            .then(response => response.json())
            .then(task =>{
                task.room_tasks.find(room_task => {
                    if (room_task.task_id === task.id && room_task.room_id === roomName.value){
                            deleteButton.value = room_task.id
                        }
                
                })
                deleteButton.addEventListener('click', function(event) {
                    event.preventDefault()
                    event.target.parentNode.remove()
                    fetch(`https://ancient-retreat-86627.herokuapp.com/room_tasks/${deleteButton.value}`,{
                        method: 'DELETE'
                    })
                })
            })

        roomTasks.id = 'task-list'
        taskName.innerText = task.name
        taskName.id = 'task-line'
        checkBox.type = 'checkBox'
        checkBox.value = task.id
        newTask.value = task.id
        deleteButton.id = 'task-delete'
        deleteButton.innerText = 'remove'
        
        room.room_tasks.find(room_task => {
            if (room_task.task_id === task.id && room_task.room_id === room.id){
                checkBox.checked = room_task.task_status
            }
        })

        roomCard.append(roomStatus, roomTasks, buttonCard)
        roomTasks.appendChild(taskName)
        taskName.prepend(checkBox)
        taskName.appendChild(deleteButton)

            checkBox.addEventListener('click', function(event){
                const taskId = checkBox.value
                fetch(`https://ancient-retreat-86627.herokuapp.com/rooms/${roomName.value}`,{
                    method:'PATCH',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({id: roomName.value, task_id: taskId})
                }).then(response => response.json())
                    .then(room => {
                        roomStatus.innerText = room.status + "% Completed"
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
        
        roomCard.appendChild(formCard)
        formCard.append(taskForm,taskCard)
        taskForm.append(taskName, taskDescription, submit)

    
        taskCard.addEventListener('click', function() {
            formCard.style.display = "none";
          })
        
        taskForm.addEventListener('submit', function(event) {
            event.preventDefault()


            fetch(`https://ancient-retreat-86627.herokuapp.com/tasks`,{
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(
                    {name:taskName.value,
                    description:taskDescription.value,
                    room_id:formCard.value}
                )
            })
            
            const newTask = document.createElement('p')
            const newCheckBox = document.createElement('input')
            const newDeleteButton = document.createElement('button')

            newCheckBox.type = 'checkbox'
            newTask.innerText = taskName.value
            newDeleteButton.id = 'task-delete'
            newDeleteButton.innerText = 'remove' 
            newCheckBox.checked = false

            roomTasks.appendChild(newTask)
            newTask.prepend(newCheckBox)
            newTask.appendChild(newDeleteButton)
            formCard.style.display = 'none'
        })
    }) 
}))