
s = [
    {id: 1},
    {id: 1},
    {id: 3},
    {id: 4},
]

console.log(s);

console.log(Math.max([1,2,3,4]));
console.log(Math.max(...[1,2,3,4]));

console.log(s.map(x => x.id));
console.log(...s.map(x => x.id));