const tasks = [];
tasks.push({
    id: 0,
    desc: 'some thing to do for today',
    name: 'name of the task',
    completed: false,
    deleted: false,
    createAt: new Date(),
    deletedAt: new Date(),
});

console.log(tasks);

let taskCounter = 1;
function addTask(name, desc){
    const task = {
        id: taskCounter++,
        name: name,
        desc: desc,
        delete: false,
        completed: false
    }
    tasks.push(task);
    return task;
}

addTask('run a mile today', 'need to run');
addTask('run 5 miles tomorrow', 'need to run more');

console.log(tasks);
console.log(taskCounter);


const taskLookUp = (x) => tasks.filter(t => t.id === x);
console.log(taskLookUp(1));

const taskLookUp2 = (id) => tasks.find(t => t.id === id);
console.log(taskLookUp2(2));

console.log('-------------------');

const idSum = tasks.reduce((acc, current) => current.id + acc, 0);
console.log(idSum);
