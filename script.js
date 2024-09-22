function addTask(){
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('task-list');
    let error = document.getElementById('error');
    
    // solution for empty task 
    if(!taskInput.value.trim()){
        error.textContent = ("Add Some Task To Do!");
        return;
    }

}