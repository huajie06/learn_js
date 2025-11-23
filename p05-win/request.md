To transition from a "student" to a "professional" developer, you need to move beyond syntax and start thinking about **robustness, error handling, memory management, and design patterns.**

Here are four exercises designed to mimic real-world tickets you might find in a professional sprint, ranging from data manipulation to architectural patterns.

---

### 1\. The Data Transformation: "The messy API response"

**The Context:** In the real world, backend data is rarely formatted exactly how the UI needs it. You often need to reshape data efficiently.
**The Concept:** Functional Programming (Map, Filter, Reduce).

**The Task:**
You have an array of transaction objects. You need to aggregate the total revenue **grouped by category**, but only for completed transactions.

```javascript
const transactions = [
    { id: 1, category: "Electronics", amount: 100, status: "completed" },
    { id: 2, category: "Clothing", amount: 50, status: "pending" },
    { id: 3, category: "Electronics", amount: 200, status: "completed" },
    { id: 4, category: "Food", amount: 30, status: "cancelled" },
    { id: 5, category: "Clothing", amount: 80, status: "completed" },
];
```

**Requirements:**

1.  Do not use a `for` loop. Use `reduce`.
2.  The output must look like this:
    ```javascript
    {
      Electronics: 300,
      Clothing: 80
    }
    ```

**Professional Bonus:** make your function generic so it can group by _any_ key, not just 'category'.

---

### 2\. The Async Challenge: "The Unreliable Network"

**The Context:** Networks fail. A professional developer doesn't just fetch data; they handle what happens when the fetch fails.
**The Concept:** Promises, Async/Await, Recursion.

**The Task:**
Write a function `fetchWithRetry(url, retries)` that attempts to fetch data from a URL.

**Requirements:**

1.  If the fetch succeeds, return the data.
2.  If the fetch fails, it should wait 1 second and try again.
3.  It should repeat this up to `n` times (the `retries` argument).
4.  If it fails after all retries, throw a custom error saying "Failed after X attempts."

**Professional Bonus:** Implement "Exponential Backoff" (wait 1s, then 2s, then 4s) instead of a fixed 1-second wait.

---

### 3\. The Architecture Pattern: "The Event Emitter"

**The Context:** Modern frameworks (like React, Node.js, Vue) rely heavily on the "Observer Pattern" (Pub/Sub) to handle state changes without tight coupling.
**The Concept:** Classes, `this` context, Closures, Memory management.

[Image of Observer Pattern diagram]

**The Task:**
Build a class called `EventEmitter` from scratch (do not use Node's built-in module).

**Requirements:**

1.  **Subscribe:** A method `.on(eventName, callback)` that registers a function.
2.  **Emit:** A method `.emit(eventName, data)` that triggers all callbacks associated with that event.
3.  **Unsubscribe:** A method `.off(eventName, callback)` that removes a specific listener (crucial to prevent memory leaks).

**Example Usage:**

```javascript
const bus = new EventEmitter();
function logger(data) {
    console.log(data);
}

bus.on("login", logger);
bus.emit("login", "User logged in"); // Console: "User logged in"
bus.off("login", logger);
bus.emit("login", "User logged in"); // Nothing happens
```

---

### 4\. The Performance Utility: "The Debounce"

**The Context:** Use cases like a "search bar" that queries an API while the user types. You don't want to fire an API call for every single keystroke (k, ke, key, keyb...), or you will crash your server.
**The Concept:** Higher-Order Functions, Closures, `setTimeout`.

**The Task:**
Write a function `debounce(fn, delay)`.

**Requirements:**

1.  It accepts a function and a delay time (in ms).
2.  It returns a _new_ function.
3.  When the new function is called, it waits for the delay.
4.  If the function is called again _before_ the delay finishes, the timer resets.

**Professional Bonus:** Ensure the debounced function passes the correct arguments and `this` context to the original function.

---

### How to proceed

Don't try to do them all at once. Pick **one** that looks most difficult to you.

**Would you like to paste your solution for one of these here? I can act as your "Senior Developer" and do a code review, highlighting potential bugs or cleaner ways to write it.**
