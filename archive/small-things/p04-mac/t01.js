async function getPosts(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')

    if (!response.ok) {
      throw new Error('something wrong')
    }

    const result = await response.json();
    return result

  } catch (error){
    console.error(`error: ${error}`)
    return null
  }
}

getPosts()
  .then(posts => {
    console.log(posts)
  })
  .catch(err => {
    console.log(err)
  })
