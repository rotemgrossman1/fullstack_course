const person = {
  username: "Felicia",
  introduce: function(){
    console.log(`Hi, I'm ${this.username}`)
  }
}

person.introduce() //prints "Hi, I'm Felicia"
