async function fetchUser(userId) {
  try {
    const userResposne = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if (!userResposne.ok) {
      throw new Error (`fetch failed, due to ${userResposne.status}`)
    }
    const result = await userResposne.json();

    return result

  } catch (error) {
    console.error(`error is: ${error}`)
    return null
  }
  
}

async function getUsers() {
  const result = await fetchUser(1)
  console.log(result) 
}

getUsers()