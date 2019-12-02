
fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => tasks.map(task => {
        const name = document.createElement('h3')
        const description = document.createElement('p')
        const tasks = document.getElementById('tasks')

        name.innerText = task.name
        description.innerText = task.description

        tasks.append(name, description)
    }))