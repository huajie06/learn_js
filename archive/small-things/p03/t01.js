async function delay(ms, name){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(name);
        }, ms)
        // reject(name);
    })
}

delay(2000, 'all')
  .then(x => {
    console.log(`sucess: ${x}`)
  })
  .catch(x => {
    console.log(`failed: ${x}`)
  });