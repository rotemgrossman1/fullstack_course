
function suggestActivity(temperature, weather) {
// Your conditional code here
if(weather==='sunny'){
    if(temperature >= 24){
    console.log("go to the beach")
    }
    else if(temperature >=15 && temperature <=24){
        console.log("Go for a walk")
    } 
    // If sunny and temp < 15°C: "Stay inside and read"
    else if(temperature < 15){
        console.log("Stay inside and read")
    }
}

// If rainy: "Watch a movie indoors"
else if(weather === 'rainy'){
    console.log("Watch a movie indoors")
}
// If cloudy and temp > 21°C: "Go hiking"
else if(weather === 'cloudy'){
    if(temperature > 21){
    console.log("Go hiking")
    }
    // If cloudy and temp <= 21°C: "Visit a museum"
    else if(weather === 'cloudy' && temperature <= 21){
        console.log("Visit a museum")
}}}
// Example usage:
suggestActivity(30, 'sunny');
suggestActivity(20, 'sunny');
suggestActivity(10, 'sunny');
suggestActivity(25, 'rainy');
suggestActivity(22, 'cloudy');
suggestActivity(18, 'cloudy');
suggestActivity(15, 'rainy');