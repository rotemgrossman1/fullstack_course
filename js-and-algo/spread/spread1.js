let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]
const [rabbit, ...restVegetableArr] = vegetableArr;
const cleanMeatArr = [...meatArr, rabbit];
console.log("Organized Meats:", cleanMeatArr);
console.log("Organized Veggies:", restVegetableArr);