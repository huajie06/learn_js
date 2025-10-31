
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


// async function getPost() {
//   const userId = 1;
//   try {
//     const [user, post] = await Promise.all([
//       fetchUser(userId),
//       fetchPost(userId)
//     ]);

//     console.log(`user name is ${user.username}`);
//     console.log(`user: ${userId} has ${post.length} posts`)
//   } catch (error) {
//     console.error(`error: ${error}`)
//   }
// }
async function getPost() {
  const userId = 1;
  const [user, post] = await Promise.all([
    fetchUser(userId),
    fetchPost(userId)
  ]);

  if (user) {
    console.log(`user name is ${user.username}`);
  } else {
    console.log('Could not fetch user.');
  }

  if (posts) {
    console.log(`user ${userId} has ${posts.length} posts`);
  } else {
    console.log('Could not fetch posts.');
  }

  console.log(`user name is ${user.username}`);
  console.log(`user: ${userId} has ${post.length} posts`)
}


getPost();
