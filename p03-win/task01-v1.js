async function fetchPost(id){

  if (id <= 0) {
    throw new Error("id must be a none zero and positive value")
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await response.json();
  return result;
}


async function getAndLog() {
  const idResult = await fetchPost(1)
  console.log(idResult);
}

getAndLog();

// fetchPost(1)
//   .then(idResult => {
//     console.log(idResult);
//   });
