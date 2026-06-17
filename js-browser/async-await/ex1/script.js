// Exercise 1
// Convert the function to use async/await syntax
// Use try/catch for error handling
// Maintain the same functionality (logging and return values)
// Test with both valid (1-10) and invalid (999) user IDs
// Given Promise-based code:
async function getUserById(userId) {
        let stockData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return stockData
    }
//wrap the code for testing purposes
function testMultipleUsers(userIdsArray) {
    
    // 2. Loop through each ID in the array
    userIdsArray.forEach(id => {
        getUserById(id).then( async(response) => {
            try{
                if(!response.ok){
                    throw new Error('User not found');
                }
                const user = await response.json();
                console.log(`Found user: ${user.name} (${user.email})`);
                return user;
                }
            catch(error){
                console.error('Error fetching user:', error.message);
                return null;
            }
        })
    })
}
        
const idsToTest = [1, 2, 99, 5]
testMultipleUsers(idsToTest);