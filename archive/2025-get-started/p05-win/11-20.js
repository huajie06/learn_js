const { closeOnOutsideClick } = require("astro/runtime/client/dev-toolbar/apps/utils/window.js");

const transactions = [
  { id: 1, category: 'Electronics', amount: 100, status: 'completed' },
  { id: 2, category: 'Clothing', amount: 50, status: 'pending' },
  { id: 3, category: 'Electronics', amount: 200, status: 'completed' },
  { id: 4, category: 'Food', amount: 30, status: 'cancelled' },
  { id: 5, category: 'Clothing', amount: 80, status: 'completed' }
];

const result2 = transactions.filter(x => x.status === 'completed')
  .reduce((acc, p) => {
    const k = p.category;

    if (!acc[k]) {
      acc[k] = 0
    }

    acc[k] += p.amount
    return acc
  }, {})

console.log(result2);


function groupBy(arr, key) {
  if (arr.length == 0) {
    return undefined;
  }

  const groupby_result = arr.filter(x => x.status === 'completed')
    .reduce((acc, ele) => {
      const k = ele[key];

      if (!acc[k]) {
        acc[k] = ele.amount;
      } else {
        acc[k] += ele.amount;
      }
      return acc
    }, {})

  return groupby_result;
}


console.log(groupBy(transactions, 'category'));

// exmaple from gemini
const calculateRevenue = (transactions, key) => {
  // Guard clause: handle missing or empty input immediately
  if (!transactions || transactions.length === 0) {
    return {};
  }

  return transactions
    .filter(txn => txn.status === 'completed')
    .reduce((acc, txn) => {
      const groupName = txn[key];

      // LOGIC: If acc[groupName] exists, use it; otherwise start at 0.
      // Then add the current amount.
      acc[groupName] = (acc[groupName] || 0) + txn.amount;

      return acc;
    }, {});
};

async function fetchWithRetry1(url, retries) {
  if (retries > 0) {
    try {
      const response = await fetch(url);
      return response;
    } catch (error) {

      setInterval(() => {
        fetchWithRetry(url, retries - 1);
      }, 1000);

    }
  } else {
    throw new Error(`fialed as attempts`);
  }
};


// async function fetchWithRetry(url, retries) {
//   let counter = 0;
//   async function _fetchWithRetry(url, retries) {

//     counter += 1;

//     if (retries > 0) {
//       try {
//         const response = await fetch(url);
//         return response;
//       } catch (error) {

//         setTimeout(() => {
//           _fetchWithRetry(url, retries - 1);
//         }, 1000 * counter * counter);
//       }
//     } else {
//       return 'error'
//     }
//   }

//   const result = await _fetchWithRetry(url, retries);

//   if (result === 'error') {
//     throw new Error(`failed after ${counter} attempts`);
//   }
//   return result;
// };

// fetchWithRetry('abc.com', 10)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));



function fetchWithRetry1(url, maxRetries) {
  let attempt = 0;

  async function makeRequest() {
    attempt++;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('fail to fetch')
      }
      return response;
    } catch (error) {
      if (attempt > maxRetries) {
        throw new Error(`failed after attempts ${attempt}, error: ${error}`);
      }

      const delay = 1000 * (attempt ** 2);

      await new Promise(resolve => setTimeout(resolve, delay));

      return await makeRequest();
    }
  }

  return makeRequest();
}

fetchWithRetry1('bac', 4)
  .then(result => console.log(result))
  .catch(err => console.log(err))

/**
 * Fetches data with exponential backoff retries.
 * @param {string} url - The URL to fetch
 * @param {number} retries - Max number of attempts
 */
async function fetchWithRetry(url, retries) {
  // We loop from 0 up to retries
  for (let i = 0; i <= retries; i++) {
    try {
      // Attempt the fetch
      // usage of await here pauses the loop until fetch responds
      const response = await fetch(url);

      // If fetch succeeds (and status is OK), return immediately
      if (response.ok) {
        return response;
      }

      // Optional: Throw error if status is 404/500 to trigger catch block
      throw new Error(`Request failed with status ${response.status}`);

    } catch (error) {
      // If this was the last attempt, stop trying and throw the error
      if (i === retries) {
        throw new Error(`Failed after ${retries} attempts: ${error.message}`);
      }

      // LOGIC: Exponential Backoff (1s, 4s, 9s...)
      const waitTime = 1000 * (i + 1) ** 2;
      console.log(`Attempt ${i + 1} failed. Waiting ${waitTime}ms...`);

      // PAUSE HERE using our Promise trick
      await new Promise(r => setTimeout(r, waitTime));
    }
  }
}

// Usage
// Note: Because fetchWithRetry is async, we must use .then or await to call it
fetchWithRetry('https://api.example.com/data', 3)
  .then(data => console.log("Success:", data))
  .catch(err => console.error(err.message));