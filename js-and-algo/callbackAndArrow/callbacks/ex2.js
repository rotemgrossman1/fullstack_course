function getTime(callback) {
  // Get the current date/time
  const time = new Date();
  
  // Call the callback function and pass the time as an argument
  callback(time);
}
const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

getTime(returnTime)
