localStorage.setItem('username', 'John');
const username = localStorage.getItem('username');

console.log(username);

function displayValue() {
    const displayValueArea = document.getElementById('displayValueArea');

    // displayValueArea.textContent = 10;

    const timestamp = Date.now(); // Get current timestamp
    const date = new Date(timestamp);
    const isoString = date.toISOString();

    displayValueArea.innerHTML = isoString + '<br><br>';

    for (i = 1; i < 5; i++) {
        console.log(`ha: ${i} !`);

        // displayValueArea.textContent += `ha: ${i}!\n`;
        displayValueArea.innerHTML += `ha: ${i} !<br>`;
    }
}

function onRemoveLi() {
    const sampleTask = document.getElementById('sample-task-01');
    const sampleSpan = sampleTask.querySelectorAll('span')[0];

    if (sampleSpan) {
        sampleSpan.onclick = () => sampleTask.remove();
    }
}
onRemoveLi();

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const randomTask = [
        'Do laundry',
        'Take out trash',
        'Clean basement',
        'Go for 1 hr run',
        'Some other workout',
        'Need to go grocery',
    ];

    addTaskBtn.addEventListener('click', () => {
        let taskText = taskInput.value.trim();

        if (taskText === '') {
            const randomElement = randomTask[Math.floor(Math.random() * randomTask.length)];
            // alert('Some random task will be assigned');
            taskText = randomElement;
        }

        console.log(taskText);

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const span = document.createElement('span');
        span.textContent = taskText;

        // DEBUG: Log the state of `li` before appending the span
        // console.log('Before appending span:', li.cloneNode(true));

        li.appendChild(checkbox);

        // DEBUG: Log the state of `li` after appending the checkbox
        // console.log('After appending checkbox:', li.cloneNode(true));

        li.appendChild(span);

        // DEBUG: Log the state of `li` after appending the span
        // console.log('After appending span:', li.cloneNode(true));

        taskList.appendChild(li);

        span.onclick = () => li.remove();

        taskInput.value = '';
    });
});