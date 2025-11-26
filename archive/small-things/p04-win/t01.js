
async function fetchUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      console.error(`api error: ${response.status}`)
      return null;
    }

    const user = await response.json();

    if (user === null) {
      console.log('invalid user ID')
      return null;
    }

    return user;

  } catch (error) {
    console.log(`error: ${error}`)
    return null;
  }
}


async function fetchPost(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

    if (!response.ok) {
      console.error(`response: ${response.status}`)
      return null
    }

    const result = await response.json();

    return result
  } catch (error) {
    console.error(`error is ${error}`)
    return null;
  }
}


async function getPost() {
  const userId = 1;
  const user = await fetchUser(userId)

  if (!user) {
    console.log("user not found")
    return null
  }

  const posts = await fetchPost(userId);

  if (!posts) {
    console.log("posts not found")
    return null
  }

  console.log(`user name is ${user.username}`);
  console.log(`user ${userId} has ${result.length} posts`)
}

getPost();
