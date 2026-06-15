function oldAsyncFunction(callback) {
setTimeout(() => {
if (Math.random() > 0.5) {
 callback(null, "Success");
} else {
 callback(new Error("Failed"));
}
 }, 1000);
}
function promisedFunction() {
  return new Promise((resolve, reject) => {
    // Call the original function
    oldAsyncFunction((err, result) => {
      // 1. Check if an error occurred
      if (err) {
        return reject(err); // Reject the promise
      }
      // 2. Otherwise, return the successful result
      resolve(result); // Resolve the promise
    });
  });
}

console.log(promisedFunction())
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})