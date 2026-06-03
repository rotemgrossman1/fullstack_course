//why we should be working with modules
//code orginization
//encapsulation - show only the relevant code, i decide what goes out and what stays in the module
//namespace protection - i can hold in different modules functions with the same names
// 2 sides to the coin
    //i write the class,
    // i use a class i wrote or a built in module
//common js
    // deafault node.js
    //require is a saved word
    // shouldnt work in a browser, so in order to work in browser we will need es modules almost always
//es modules
    // modern js working with modules (not default)
    //import is a saved word

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

const PI = 3.1415;


// module.exports = add;//can only export one function

//in order to export multi function we need to create an object
module.exports = { add, subtract, PI}