const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name ='yos';// or 'Ted';

// The above code is a reservation system where people can claim their reservations when they arrive.

// If the reservation exists and is unclaimed, welcome the user (console log
if(reservations[name] && !reservations[name].claimed){
    console.log(`Welcome, ${name}`);
    reservations[name].claimed = true;
}

// If the reservation exists and is already claimed, inform the user about the situation
else if(reservations[name] && reservations[name].claimed){
    console.log("Hmm, someone already claimed this reservation");
}
// If there is no reservation, tell the user there is nothing under their name
else if(!reservations[name]){
    console.log(`no reservation under the name ${name}, updaing reservations and adding ${name}`)
    reservations[name] = {claimed:true};
    // animalCounts.eagle = 24
}
// console.log(reservations);
// Use 'Bob' and 'Ted' to test your code:

// When you test Bob, it should say "Welcome, Bob"
// When you test Ted, it should say "Hmm, someone already claimed this reservation"
// If you try a different name, it should say "You have no reservation"