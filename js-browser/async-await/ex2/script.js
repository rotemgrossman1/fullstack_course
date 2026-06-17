// Create a function that fetches a user and then fetches all posts by that user.
// Return an object containing both user info and their posts.
// Handle errors at each step with meaningful messages.
// If user doesn't exist, don't attempt to fetch posts.

async function getUserWithPosts(userId) {
    try{
        // Your implementation here
        // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!userResponse.ok){
            throw new Error('User not found');
        }
        const userInfo = await userResponse.json();
        // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        if(!postsResponse.ok){
            throw new Error('Failed to fetch Posts');
        }
        const posts = await postsResponse.json()
        const postsArr = posts.map(post => ({
            title: post.title,
            body: post.body
        }))
        
        // 3. Return combined data

        const userInfoAndPosts = {
            userInfo,
            postsArr
        }
        return userInfoAndPosts
    }
    catch(error){
        console.error('Error in getUserWithPosts:', error.message);
        return null;
    }
}

async function runTests() {
    console.log("--- Test Case 1: Existing User (ID: 1) ---");
    const test1 = await getUserWithPosts(1);
    console.log("Result 1:", test1);

    console.log("\n--- Test Case 2: Non-Existent User (ID: 999) ---");
    const test2 = await getUserWithPosts(999);
    console.log("Result 2:", test2); // Should log the error and return null
}

runTests();
