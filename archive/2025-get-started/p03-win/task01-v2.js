async function fetchPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    // This will now catch network errors *and* our thrown 404 error
    console.error("Failed to fetch post:", error.message);
    // You could return null or an empty object to handle it gracefully
    return null;
  }
}


async function getAndLogPost() {
  const post1 = await fetchPost(1);
  if (post1) {
    console.log("Found post 1:", post1.title);
  }

  // 2. This one will fail (e.g., an ID that doesn't exist)
  console.log("---");
  console.log("Fetching a bad ID...");
  const post9999 = await fetchPost(aaaa); // This will trigger the 404

  if (post9999) {
    console.log("Found post 9999:", post9999.title);
  } else {
    console.log("Could not find post 9999.");
  }
}

getAndLogPost();
