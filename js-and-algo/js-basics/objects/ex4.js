const date = 3;

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // Flip to false to test other conditions
    fridge: {
        price: 500,
        works: false, // Flip to true to test other conditions
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
};


const owner = kitchen.owner;
const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;

const radishItem = kitchen.fridge.items[1]; 
const radishName = radishItem.name;


const daysExpired = date - radishItem.expiryDate;
const repairCost = kitchen.fridge.price / 2;


let message = `${owner}'s ${radishName} expired ${daysExpired} day ago. `;

if (works) {
    message += `Weird, considering her fridge works. `;
} else {
    message += `Probably because her fridge doesn't work. `;
}

if (hasOven) {
    message += `Luckily, she has an oven to cook the ${radishName} in.`;
} else {
    message += `Too bad she doesn't have an oven to cook the ${radishName} in.`;
}

if (!works) {
    message += ` And she'll have to pay ${repairCost} to fix the fridge.`;
}


console.log(message);