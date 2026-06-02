const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

//   Only allows you make a drink if it's a drink in the drinkRequirements object. 
// Otherwise log: "Sorry, we don't make "
// Reduces the beans count according to the drinkRequirements object and the given drinkType
// Logs "Sorry, we're all out of beans!" if there are not enough beans to make that drink
  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];
    if(drink === undefined) {
        console.log("Sorry, we don't make " + drinkType);
    }
    else if(this.beans < drink) {
        console.log("Sorry, we're all out of beans!");
    }
    else{
        this.beans -= drink;
    }
    // TODO: Finish this method
  },
  buyBeans:function(numBeans) {
    this.beans += numBeans;
    this.money -= numBeans;// Assume 1 bean costs 1 money
  }
}

console.log("trying to make latte");
coffeeShop.makeDrink("latte"); 
console.log("trying to make americano");
coffeeShop.makeDrink("americano");
console.log("trying to make filtered");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
console.log("trying to make doubleShot");
coffeeShop.makeDrink("doubleShot");
console.log("trying to make frenchPress");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
