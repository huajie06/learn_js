function greet(name) {
    return `Hello, ${name}!`;
}

// Here's the arrow function equivalent
const greet = (name) => `Hello, ${name}!`;

// Let's break down each part:
// 1. 'const greet' - we're declaring a constant variable
// 2. '(name)' - the parameter list
// 3. '=>' - the arrow syntax that defines it as an arrow function
// 4. The expression after the arrow is the implicit return

// You can write the same function in different ways:

// With explicit return and curly braces
const greet1 = (name) => {
    return `Hello, ${name}!`;
};

// Single parameter doesn't need parentheses
const greet2 = name => `Hello, ${name}!`;

// Multiple parameters need parentheses
const greetFull = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;

// No parameters need empty parentheses
const greetWorld = () => `Hello, world!`;

// Multiple lines need curly braces and explicit return
const greetFancy = (name) => {
    const message = `Hello, ${name}!`;
    const decoration = "=".repeat(message.length);
    return `${decoration}\n${message}\n${decoration}`;
};

// Arrow functions and 'this'
// Note: Arrow functions don't bind their own 'this'
const person3 = {
    name: "John",
    // Traditional function works here because it binds 'this'
    greetDelay: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}`); // 'this' is undefined
        }, 1000);
    },
    // Arrow function captures 'this' from surrounding context
    greetDelayArrow: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // Works correctly
        }, 1000);
    }
};

console.log(greet("Alice"));             // "Hello, Alice!"
console.log(greetFull("John", "Doe"));   // "Hello, John Doe!"
console.log(greetWorld());               // "Hello, world!"
console.log(greetFancy("Bob"));          // "===========\nHello, 

person
person.greetDelay()
person.greetDelayArrow()

person.greetDelay()




/***********************/


function greet0(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  greet0("Alice", () => {
    console.log("This is a callback function.");
  });

  const myCallback = () => {
    console.log("This is a callback function.");
};
greet0("Alice", myCallback);

myCallback()



function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
  }

function orderp(banana) {
    setTimeout (() =>{
        const p ='pizza';
        banana(p)
    },2000)
}
function pready(p){
    console.log(`eat the ${p}`);
}

orderp(pready)
console.log('call')


function orderp1(banana) {
    const p ='pizza';
    sleep(2000);
    banana(p);
}
orderp1(pready);
console.log('call!!!');

