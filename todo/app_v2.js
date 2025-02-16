// click on a list, toggle the completed class
            // double click on a list item, remove it from the list

            const taskInput = document.getElementById('taskInput');
            const addTaskBtn = document.getElementById('addTaskBtn');
            const addRandomTaskBtn = document.getElementById('addRandomTaskBtn');
            const taskList = document.getElementById('taskList');
            const lisPreExample = document.getElementById('lisPreExample');

            addRandomTaskBtn.addEventListener('click', () => {
                const randomTask = [
                    'Do laundry',
                    'Take out trash',
                    'Clean basement',
                    'Go for 1 hr run',
                    'Some other workout',
                    'Need to go grocery',
                ];

                const randomElement = randomTask[Math.floor(Math.random() * randomTask.length)];
                addTask(randomElement);
                saveTasks();
            });

            lisPreExample.addEventListener('click', () => {
                lisPreExample.classList.toggle('completed');
                saveTasks();
            });

            lisPreExample.addEventListener('dblclick', () => {
                lisPreExample.remove();
                saveTasks();
            });

            addTaskBtn.addEventListener('click', () => {
                const task = taskInput.value.trim();
                if (task !== '') {
                    addTask(task);
                    taskInput.value = '';
                }
            });

            const addTask = (task) => {
                const li = document.createElement('li');
                li.textContent = task;
                li.addEventListener('click', () => {
                    li.classList.toggle('completed');
                    saveTasks();
                });
                li.addEventListener('dblclick', () => {
                    li.remove();
                    saveTasks();
                });
                taskList.appendChild(li);
            };

            const consoleTaskList = document.getElementById('consoleTaskList');
            consoleTaskList.addEventListener('click', () => {
                console.log("here's the content!");
                console.log(localStorage.getItem('tasks'));
            });

            const saveTasksBtn = document.getElementById('saveTasks');
            saveTasksBtn.addEventListener('click', () => {
                saveTasks();
            });
            const saveTasks = () => {
                const tasks = [];
                const listItems = taskList.querySelectorAll('li');
                listItems.forEach((li) => {
                    tasks.push({ text: li.textContent, completed: li.classList.contains('completed') });
                });
                localStorage.setItem('tasks', JSON.stringify(tasks));
            };