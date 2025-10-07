console.log("hello world")


let greet = (somepeople) => "hello: " + `${somepeople}`;

console.log(greet("wtf"));

let haha =(var1, var2, var3) => {
    return var1 + var2 +var3;
}

console.log(haha(1,2,3));

function dostuff () {
    return "hello from dostuff";
}

console.log(dostuff());


function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        
    }
  }

function dostuff2(func){
    sleep(300);
    func();
}

let func = () =>{
    console.log("?????")
}

dostuff2(func);

console.log(Date.now())

function formatDate() {
    const now = new Date();
    return now.toISOString().replace("T", " ").slice(0, -1); // Remove 'Z' at the end
  }

console.log(formatDate()); 


const now = new Date();
console.log(now);
console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toISOString().replace("T", " "));


console.log("hello world".slice(0,10));
console.log("hello world".slice(0,100));
console.log("hello world".slice(0,-2));

console.log("===============================")
console.log("===============================")

async function fetchData() {
    return "Data fetched!";
}
  
fetchData().then((result) => console.log(result));

// An async function always returns a Promise. 
// If the function returns a value, it will be wrapped 
// in a resolved Promise.


async function stuff01 (name) {
    return `logging name: $name`;
}

stuff01("joe")
    .then((result) => console.log(result))
    .catch((failed) => console.log(failed));



const p1 = new Promise((success, fail) => {
    let a = false;
    if (a) {
        success("sucess data");
    } else {
        // console.log("this is false");
        fail("fail data");
    }
})

p1.then( (s) =>{
    s += "yeah!!!!";
    console.log(s);
}).catch( (par) => {
    for (i=1;i<=10;i++){
        console.log(par);
    }
})


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 1000);
  });


  myPromise
  .then((result) => {
    console.log(result); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // "Error: Failed to fetch data."
  });










