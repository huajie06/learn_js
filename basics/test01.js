// CLI task manager with data export 

console.log("hello world")
console.log('what???')

const longStr = `
today is a good day
    what??

fine
byby
`

console.log(longStr)



// use use let and const

function doStuff(x){
    return x + 2;
}

x = 1
x = doStuff(x)
console.log(x)

console.log('-------------------------')


console.log(formatstuff('ssss')) // this works even it's running before defined.

function formatstuff(x){
    return `user input is ${x}`
}

const x1 = 1
const x2 = 'hello'

console.log(formatstuff(x1))
console.log(formatstuff(x2))

console.log('-------------------------')
// console.log(add2("a", "b")) 
// this will cause error:, "hoisting"
const add2 = function(x1, x2){
    return x1 + x2;
}

console.log(add2(1,2))
console.log(add2("a", "b"))

console.log('-------------------------')

const add2_v1 = (x1, x2) => {
    return x1 + x2;
}

const var1 = [1, 2, 3, 4]
console.log(var1);

var1.forEach(console.log);
// console.log(var1.forEach(x => x*2));

console.log('-------------------------')
var1.forEach(x => console.log(x));
console.log('-------------------------');
(x => console.log(x))(1, 0, [1, 2, 3, 4]);


arr2 = [
    {name: 'mike', age:10},
    {name: 'jack', age:110},
    {name: 'kate', age:20},
]

const idx =  arr2.findIndex(x => x.name == 'jack');
console.log(idx);