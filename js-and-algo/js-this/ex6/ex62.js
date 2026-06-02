const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 3},
    doubleShot: {beanRequirement: 15, price: 7},
    frenchPress: {beanRequirement: 12, price: 6}
  },

  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];
    
    if (drink === undefined) {
      console.log("Sorry, we don't make " + drinkType);
      return false;
    }
    
    if (this.beans < drink.beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return false;
    }
    
    this.beans -= drink.beanRequirement;
    return true;
  },

  buyBeans: function(numBeans) {
    this.beans += numBeans;
    this.money -= numBeans;
  },

  buyDrink: function(drinkType) {
    const success = this.makeDrink(drinkType);
    
    if (success) {
      this.money += this.drinkRequirements[drinkType].price;
    }
  }
}

console.log("trying to buy latte");
coffeeShop.buyDrink("latte");
console.log("money should be 105: " + coffeeShop.money);
console.log("beans should be 30: " + coffeeShop.beans);

console.log("\ntrying to buy americano");
coffeeShop.buyDrink("americano");
console.log("money should be 108: " + coffeeShop.money);
console.log("beans should be 25: " + coffeeShop.beans);

console.log("\ntrying to buy filtered");
coffeeShop.buyDrink("filtered");
console.log("money should still be 108: " + coffeeShop.money);
