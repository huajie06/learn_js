const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

const clearLocalStorage = document.getElementById('clearLocalStorage');

clearLocalStorage.addEventListener('click', () => {
    localStorage.setItem('tasks', '');
    const ul = document.getElementById('taskList')
    ul.innerHTML = '';
});

const displayLocalStorage = document.getElementById('displayLocalStorage');

displayLocalStorage.addEventListener('click', () => {
    console.log(localStorage.getItem('tasks'));
});

const loadTasks = () => {
    const tasksString = localStorage.getItem('tasks');
    if (!tasksString || tasksString.trim() === '') {
        // If tasksString is null, undefined or empty, use an empty array
        tasks = [];
    } else {
        //attempt to parse
        try {
            tasks = JSON.parse(tasksString);
        } catch (err) {
            console.log(`ERROR: ${err.message}`);
            // If tasksString is not valid JSON, use an empty array or log error
            tasks = [];
        }
    }
    tasks.forEach((task) => addTaskToDOM(task.text, task.completed));
};

const saveTasks = () => {
    const tasks = [];
    taskList.querySelectorAll('li').forEach((taskItem) => {
        tasks.push({
            text: taskItem.textContent,
            completed: taskItem.classList.contains('completed'),
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTaskToDOM = (taskText, completed = false) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    if (completed) {
        taskItem.classList.add('completed');
    }
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        saveTasks();
    });
    taskItem.addEventListener('dblclick', () => {
        taskItem.remove();
        saveTasks();
    });
    taskList.appendChild(taskItem);
};

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToDOM(taskText);
        saveTasks();
        taskInput.value = '';
    }
});

loadTasks();