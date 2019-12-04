const roomCard = document.querySelector('.steps')

fetch(`http://localhost:3000/rooms`)
.then(response => response.json())
.then(rooms => rooms.forEach(room => {
    const roomName = document.createElement('h3')
    const newTask = document.createElement('button')
    const roomStatus = document.createElement('p')

    roomName.innerText = room.name
    roomName.id = 'step'
    newTask.innerText = 'New Task'
    
    
    roomCard.appendChild(roomName)
    
    fetch(`http://localhost:3000/tasks`)
    .then(response => response.json())
    .then(tasks => tasks.forEach(task =>{
        const taskList = document.createElement('li')
        const taskName = document.createElement('p')
        const checkBox = document.createElement('input')

        taskList.id = 'task-list'
        taskName.innerText = task.name
        checkBox.type = 'checkBox'
        checkBox.value = task.id
        newTask.value = task.id

        roomName.append(taskList, newTask)
        taskList.appendChild(taskName)
        taskName.prepend(checkBox)
    }))
    
    newTask.addEventListener('click', function(){
        const formCard = document.createElement('div')
        const taskCard = document.createElement('span')
        const taskForm = document.createElement('form')
        const taskName = document.createElement('input')
        const taskDescription = document.createElement('input') 
        const submit = document.createElement('input')
        formCard.id = 'form-card'
        submit.type = 'submit'

        taskForm.innerText = 'New Task Form'
        taskName.placeholder = 'Task Name'
        taskDescription.placeholder = 'Task Desctiption'
        submit.innerText = 'Submit'
        
        roomName.appendChild(formCard)
        formCard.appendChild(taskCard)
        taskCard.appendChild(taskForm)
        taskForm.append(taskName, taskDescription, submit)
        
        taskForm.addEventListener('submit', function(event) {
            event.preventDefault()
            console.log(taskDescription.value)
        })
    })        
}))

// checkBox.addEventListener('click', {

// modal or create a form and asign it (w, h, z) positions and set default to hidden

//     fetch(`http://localhost:3000/tasks/${task.id}`,
//     method: 'PATCH')
// }