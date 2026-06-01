let p1 ={
    name: "jill",
    age: 30,
    city: "New York"
}
let p2 ={
    name: "robert",
    age: 25,
    city: "Los Angeles"
}

// If the people are the same age
if(p1.age === p2.age){
    if(p1.city === p2.city){
        console.log("Jill wanted to date Robert")
    }
    else{
        console.log("Jill wanted to date Robert, but couldn't")
    }
}
// If the people live in the same city
// Print "Jill wanted to date Robert"
// If they're not in the same city
// Print "Jill wanted to date Robert, but couldn't"