
# Doc

## requirement for product_v2.js


📌 Exercise Requirements:

- Create an array of at least 5 Product instances (mix of expensive/cheap)
- Write a function getExpensiveProducts(products) that:
    - Takes an array of Product objects
    - Returns a new array containing only products where isExpensive === true
- Write a function applyDiscountToAll(products, percent) that:
    - Applies the given discount to every product in the array
    - Returns the same array (mutates in place)
- Chain operations:
    - Create products → apply 10% discount to all → get only expensive ones → print each

💡 Use array methods: .filter(), .forEach(), etc. (You learned these earlier!) 

✅ Your Task:
Write the code meeting all 4 requirements above.

When you share it, I’ll check:

- correct use of array methods
- Immutability vs. mutation clarity
- Clean chaining
- Error handling (e.g., what if products isn’t an array?)

## requirement for product_v3.js

📌 Exercise Requirements:
1. Write a function getProductSummaries(products) that:
    - Takes an array of Product objects
    - Returns a new array of plain objects with:
```js
{ type, origin, price, isExpensive }
```
2. Write a function getTotalValue(products) that:
    - Returns the sum of all prices (use .reduce())
3. Chain operations to:
    - Get summaries of only expensive products
    - Then log the total value of those expensive items

>💡 This mimics real-world tasks: “Get me a report of high-value inventory and its total worth.” 


✅ Your Task:
Implement these 3 requirements using .map(), .reduce(), and chaining.

When you share your solution, I’ll check:
- Correct use of .map() and .reduce()
- Immutability (not modifying original objects)
- Clean, readable chains
