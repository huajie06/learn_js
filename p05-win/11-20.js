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


function fetchWithRetry(url, retries) {
  const counter = 0;

  async function _fetchWithRetry(url, retries) {

    counter += 1;

    if (retries > 0) {
      try {
        const response = await fetch(url);
        return response;
      } catch (error) {

        setInterval(() => {
          _fetchWithRetry(url, retries - 1);
        }, 1000 * counter * counter);
      }
    } else {
      return 'error'
    }
  }

  const result = _fetchWithRetry(url, retries);

  if (result === 'error') {
    throw new Error(`failed after ${counter} attempts`);
  }
  return result;
};

const result = fetchWithRetry('abc.com', 10);




