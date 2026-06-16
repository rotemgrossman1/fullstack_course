addEventListener("DOMContentLoaded", () => {
  randomJoke();

  function randomJoke() {
    //add loading
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const joke = data.setup;
        const punch = data.punchline;
        const punchBtn = document.querySelector("#punchButton")
        document.querySelector("#punch").innerHTML= "                                       ";
        document.querySelector("#joke").innerHTML= joke;
        punchBtn.addEventListener("click", ()=>{
            document.querySelector("#punch").innerHTML= punch;
        });
    
      })
  }

  document
    .querySelector("#jokeButton")
    .addEventListener("click", randomJoke);
});