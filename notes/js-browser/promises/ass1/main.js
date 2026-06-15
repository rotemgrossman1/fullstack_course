function rollDicePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.9) {
        reject("Dice fell off the table, you should reroll");
      } else if(random > 0.75){
        resolve('6')
      }else if(random > 0.6){
        resolve('5')
      }else if(random > 0.45){
        resolve('4')
      }else if(random > 0.3){
        resolve('3')
      }else if(random > 0.15){
        resolve('2')
      }else {
        resolve('1')
      }
    }, 500);
  });
}
rollDicePromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });