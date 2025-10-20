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
    let nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

    const newTask = {
        id: nextId,
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

function completeTask(id){
    const idx = tasks.findIndex(t => t.id ===id);
    if (idx ===-1){
        console.log('no such id found');
    } else {
        tasks[idx].completed = true;
        console.log(`task id: ${id}, completed`);
    }
}

function findTask(id){
    const idx = tasks.findIndex(t => t.id === id);
    console.log(`task id for ${id} is ${tasks[idx]}`);
}


const getCompletedTasks = () => {
    const completedTask = tasks.filter(t => t.completed === true);
    return completedTask;
}

const getDeletedTasks = () => tasks.filter(t => t.deleted === true);;


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
console.log(getCompletedTasks());

printSep('print deleted task');
console.log(getDeletedTasks());
