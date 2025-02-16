
const addTaskBtn = document.getElementById('addTaskBtn');
const randomAddTaskBtn = document.getElementById('randomAddTaskBtn');
const loadTaskBtn = document.getElementById('runLoadTask');
const runClearTask = document.getElementById('runClearTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


runClearTask.addEventListener('click', ()=>{
    // const li = document.createElement('li');
    // li.textContent = 'Do some random work stuff';

    // taskList.replaceChildren(li);
    taskList.innerHTML = '';
})


randomAddTaskBtn.addEventListener('click', () => {
    const randomTask = [
        'Do laundry',
        'Take out trash',
        'Clean basement',
        'Go for 1 hr run',
        'Some other workout',
        'Need to go grocery',
    ];

    const randomElement = randomTask[Math.floor(Math.random() * randomTask.length)];
    const li = document.createElement('li');
    li.textContent = randomElement;

    taskList.appendChild(li);
});

addTaskBtn.addEventListener('click', () => {
    addTasks();
});

function addTasks() {
    const li = document.createElement('li');
    li.textContent = taskInput.value.trim();

    taskList.appendChild(li);
    taskInput.value = '';
}

const saveTask = document.getElementById('runSaveTask');

saveTask.addEventListener('click', () => {
    saveTaskFunc();
});

function saveTaskFunc() {
    const ul = document.getElementById('taskList');
    const li = ul.querySelectorAll('li');

    const tasks = [];

    li.forEach((taskItem) => {
        tasks.push(taskItem.textContent.trim());
    });

    console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

loadTaskBtn.addEventListener('click', () =>{
    loadTask();
})
function loadTask() {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    
    taskList.innerHTML="";

    tasks.forEach((taskItem) =>{
        const li = document.createElement('li');
        li.textContent = taskItem;
        taskList.appendChild(li);
    });
}




localStorage.setItem('username', 'John');
const username = localStorage.getItem('username');

console.log(username);