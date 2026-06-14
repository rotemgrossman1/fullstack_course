const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {
    const name = document.getElementById('input-data').value
    checkReservation(name)
});

const checkReservation = function(name){

    if(!reservations[name]){
        document.getElementById('message-to-user').textContent = "You have no reservation";
    }else if(!reservations[name].claimed){
        document.getElementById('message-to-user').textContent = "Welcome, " + name;
    }else{
        document.getElementById('message-to-user').textContent = "Hmm, someone already claimed this reservation";
    }
}
