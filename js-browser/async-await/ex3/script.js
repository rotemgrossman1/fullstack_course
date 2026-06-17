async function fetchUsers(){
    const allUsers = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return allUsers.json()
}   
async function fetchPosts(){
    const allPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return allPosts.json()
}  
async function fetchComments(){
    const allComments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    return allComments.json()
}  
async function getDashboardDataParallel() {
    const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
    ]);

    return { users, posts, comments};
}
function getTopThreePosters(postsObject) {
    // 1. Convert object to an array of post items
    const posts = Object.values(postsObject);

    // 2. Count frequencies of each userId
    const counts = {};
    posts.forEach(post => {
    if (post && post.userId) {
        counts[post.userId] = (counts[post.userId] || 0) + 1;
    }
    });

    // 3. Sort userIds by post count in descending order and take the top 3
    return Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])
    .slice(0, 3)
    .map(Number); // Convert keys back to numbers if needed
}
async function init() {
    const { users, posts, comments } = await getDashboardDataParallel();
    const totalUsers = users.length
    const totalPosts = posts.length
    const totalComments = comments.length
    
    const summary = {
        totalUsers: totalUsers,
        totalPosts:totalPosts,
        totalComments: totalComments,
        avgPostsPerUser: totalPosts/totalUsers,
        avgCommentsPerPost: totalComments/totalPosts
    }
    console.log(users)
    const topUsers = getTopThreePosters(posts)
    for(let user of topUsers){
        
    }
}
init()