function addTask(){
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('task-list');
    let error = document.getElementById('error');
    
    error.textContent = "";
    // create a new li
    let newEl = document.createElement('li');
    newEl.textContent = taskInput.value;
    
    
}