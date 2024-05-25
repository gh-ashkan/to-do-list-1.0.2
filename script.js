const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="task-content">${taskText}</span>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
}

function editTask(editBtn) {
    const taskContent = editBtn.parentNode.querySelector('.task-content');
    taskContent.contentEditable = true;
    taskContent.style.backgroundColor = '#f0f0f0';
    editBtn.style.display = 'none';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.onclick = function() {
        saveTask(taskContent, saveBtn, editBtn);
    };

    taskContent.parentNode.appendChild(saveBtn);
}

function saveTask(taskContent, saveBtn, editBtn) {
    taskContent.contentEditable = false;
    taskContent.style.backgroundColor = '#fff';
    saveBtn.parentNode.removeChild(saveBtn);
    editBtn.style.display = 'inline';
}

function deleteTask(deleteBtn) {
    deleteBtn.parentNode.remove();
}
