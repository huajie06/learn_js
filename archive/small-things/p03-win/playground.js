
const x = 10
const action1 = 'succeed'
const action2 = 'failed'


async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (x > 2) {
            resolve(action1);
           } else {
            reject(action2);
           }
        }, ms);
    })
}

delay(2000)
  .then(x => console.log(x))
  .catch(x => console.log(x))



async function doStuff(ms){
    return new Promise((r, j) => {
        setTimeout(() => {

        }, ms)
    })
}





