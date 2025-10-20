
const tasks = [];

tasks.push({
    id: 1,
    task: "run a 5 miles",
    createdAt: new Date().toISOString(),
    priority: "high",
    completed: false,
    deleted: false
});

function addTask(t, priority){
    tasks.sort((a, b) => a.id - b.id);

    const maxId = tasks[tasks.length-1].id;
    const newTask = {
        id: maxId+1,
        task: t,
        createdAt: new Date().toISOString(),
        priority: priority,
        completed: false,
        deleted: false
    };

    tasks.push(newTask);
    return newTask;
};

function deleteTask(id){
    const idx = tasks.findIndex(t => t.id === id);

    if (idx === -1){
        console.log('no such id found');
    } else {
        tasks[idx].deleted = true;
        console.log(`task id: ${id}, sucessfully deleted`);
    }
};

// findIndex
function completeTask(id){
    const idx = tasks.findIndex(t => t.id ===id);
    if (idx ===-1){
        console.log('no such id found');
    } else {
        tasks[idx].completed = true;
        console.log(`task id: ${id}, completed`);
    }
}

// find!
function findTask(id){
      return tasks.find(t => t.id === id) || null;
}

// filter
const getActiveTasks = () => tasks.filter(t => !t.deleted);
const getActiveCompletedTasks = () => tasks.filter(t => t.completed && !t.deleted);


function printSep(x){
    console.log(`=================${x}=================`);
}

console.log(tasks);
printSep('add tasks');
addTask('homework', 'high');
addTask('do grocery', 'low');
console.log(tasks);
printSep('delete task');
deleteTask(1)
console.log(tasks);

printSep('completed task');
completeTask(2);
console.log(tasks);

printSep('print completed task');
console.log(getActiveTasks());

printSep('print deleted task');
console.log(getActiveCompletedTasks());