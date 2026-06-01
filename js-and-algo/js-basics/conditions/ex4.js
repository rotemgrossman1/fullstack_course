let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
// // Your conditional code here
// VIP customers: 20% discount always
function calculateDiscount(customerType, purchaseAmount, dayOfWeek) {
    if(customerType === "vip"){
        // console.log("You are a VIP customer");
        console.log("You get a 20% discount");
        purchaseAmount = purchaseAmount * 0.8;
        console.log(`Your final price is: $${purchaseAmount}`);
    }
    // Premium customers: 15% on weekends, 10% on weekdays
    else if(customerType === "premium"){
        if(dayOfWeek === 6 || dayOfWeek === 0){
            console.log("You get a 15% discount");
            // console.log(`final price calculation: ${purchaseAmount} * 0.85 = ${purchaseAmount * 0.85}`);
            purchaseAmount = purchaseAmount * 0.85;
            
            console.log(`Your final price is: $${purchaseAmount}`);
        }
        else{
            console.log("You get a 10% discount");
            purchaseAmount = purchaseAmount * 0.9;
            console.log(`Your final price is: $${purchaseAmount}`);
        }
    }
    // Regular customers: 10% if purchase > $100, 5% if purchase > $50, 0% otherwise
    else{
        if(purchaseAmount > 100){
            console.log("You get a 10% discount");
            purchaseAmount = purchaseAmount * 0.9;
            console.log(`Your final price is: $${purchaseAmount}`);
        }else if(purchaseAmount > 50){
            console.log("You get a 5% discount");
            purchaseAmount = purchaseAmount * 0.95;
            console.log(`Your final price is: $${purchaseAmount}`);
        }else{
            console.log("You get no discount");
            console.log(`Your final price is: $${purchaseAmount}`);
        }
    }
    // Weekends are represented by day 6 (Saturday) or 0 (Sunday)
}
// Example usage:
calculateDiscount(customerType, 150, dayOfWeek); 
calculateDiscount("vip", 200, 3); // VIP on a weekday
calculateDiscount("premium", 120, 6); // Premium on a weekend
calculateDiscount("premium", 80, 2); // Premium on a weekday
calculateDiscount("regular", 120, 4); // Regular with purchase > $100
calculateDiscount("regular", 70, 5); // Regular with purchase > $50
calculateDiscount("regular", 30, 1); // Regular with purchase <= $50
