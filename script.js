function addTask(){
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('task-list');
    let error = document.getElementById('error');
    
    error.textContent = "";
    // create a new li
    let newEl = document.createElement('li');
    newEl.textContent = taskInput.value;
    
    // create   a new remove button
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function (){
        taskList.removeChild(newEl);
    };
    
    // Append the remove button to the list item
    newEl.appendChild(removeButton);
    
    taskList.appendChild(newEl);
    
    // after adding the value in the list remove the text from the textbar 
    taskInput.value = '';
    
    // solution for empty task 
    if(!taskInput.value.trim()){
        error.textContent = ("Add Some Task To Do!");
        return;
    }
}