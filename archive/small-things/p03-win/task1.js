

async function delay(ms){
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve('Data received');
    }, ms)
  })
}


delay(200)
  .then(x => console.log(x))
