/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// function calculateTotalSpentByCategory(transactions) {
  
//   try {
//     if (transactions.length <= 0) return [];
//   } catch(err) {
//     throw new Error(err);
//   }

//   let categoryMap = new Map();

//   let categoryWiseExpense = transactions.reduce((accumulator, transaction) => {
//     if (accumulator.get(transaction.category) === undefined) {
//       accumulator.set(transaction.category,  0);
//     }

//     accumulator.set(transaction.category, categoryMap.get(transaction.category)+transaction.price);

//     return accumulator;
//   }, categoryMap);

//   let catWiseExpenseList = [];

    
//   categoryWiseExpense.forEach((totalPrice, category, map) => {
//     let categoryObj = {};
//     categoryObj["category"] = category;
//     categoryObj["totalSpent"] = totalPrice;
//     catWiseExpenseList.push(categoryObj);
//   });
  

//   return catWiseExpenseList;
// }
// Cleaner solution

function calculateTotalSpentByCategory(transactions) {

  let expensePerCategory = {}

  // iterate over all transactions data
  transactions.forEach(transaction => {
    const {category, price} = transaction;

    if (!expensePerCategory[category]) {
      expensePerCategory[category] = price;
    } else {
      expensePerCategory[category] += price;
    }
  })

  let categoryWiseExpenses = Object.keys(expensePerCategory).map(categoryName =>  ({
    category: categoryName,
    totalSpent: expensePerCategory[categoryName]
  }));
  
  return categoryWiseExpenses;
}


module.exports = calculateTotalSpentByCategory;
