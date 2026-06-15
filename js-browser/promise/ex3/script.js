// Simulated inventory database
const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            for(let item of items){
                const inventoryItem = inventory[item]

                if(!inventoryItem || inventoryItem.stock <= 0){
                    return reject(new Error(`Item: ${item} is out of stock`))
                }
            }
            resolve(items)
        }, 500)
    })
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let subtotal = 0
            for(let item of items){
                const inventoryItem = inventory[item]
                subtotal += inventoryItem.price
            }
            const tax = subtotal*0.08
            const total = subtotal+tax
            const prices ={subtotal, tax, total}
            resolve(prices)
            
        }, 200)
    })
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let random = Math.random();
            if(random>0.1){
                let transactionId = Math.floor(Math.random()*1000)
                resolve({transactionId, amount, status: 'success'})
            }else{
                reject(new Error('payment failed'))
            }
            
        }, 1500)
    })
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            for(let item of items){
                const inventoryItem = inventory[item]
                inventoryItem.stock--
            }
            resolve(items)
            
        }, 300)
    })
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately
function checkout(itemNames) {
  // 1. Start by checking if items are in stock
  return checkInventory(itemNames)
    .then(() => {
      // 2. Once checked, calculate the total prices
      return calculateTotal(itemNames);
    })
    .then((prices) => {
      // 3. Take the total price from the previous step and process payment
      return processPayment(prices.total);
    })
    .then((paymentDetails) => {
      // 4. Once payment succeeds, update the inventory stock
      // We pass paymentDetails down the line by returning it alongside our next promise
      return updateInventory(itemNames).then(() => paymentDetails);
    })
    .then((paymentDetails) => {
      // 5. Finally, return the final order confirmation object
      return {
        status: 'completed',
        transactionId: paymentDetails.transactionId,
        amountPaid: paymentDetails.amount
      };
    });
}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));
