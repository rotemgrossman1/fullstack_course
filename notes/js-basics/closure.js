// let x =10;              //browser - global scope

// function foo() {
//     let y = 20;         //local scope
//     console.log(x+y) //30
// }
// foo()
// console.log(y) //error, y is not defined


// function foo() {
//     let y =20;              //closure scope
//     function innerFoo(){
//         let w = 50          //local scope
//         console.log(y+w)
//     }
//     innerFoo()
// }
// foo();

//nested chain scope
// function foo(){
//     let y = 20;
//     function innerFoo(){
//         let w = 50;
//         console.log(y + w);
//         function innerInnerFoo(){
//             console.log(y + w) 
//         }
//         innerInnerFoo();
//     }
//     innerFoo();
// }
// foo()


//closere magic
function foo(){
    let y = 20;
    function innerFoo(){
        let w = 50;
        console.log(y + w);
    }

    return innerFoo; //returning the inner function, 
    // which has access to the outer function's variables (y in this case)
}

const myFoo = foo();
myFoo() 

function moo(){
    let x = 1;
    setTimeout(() => {
        console.log(x);
    }, 5000);
}

// moo() //after 5 seconds, it will print 1, because the inner function (the arrow function in setTimeout) has access to the outer function's variable (x in this case) even after the outer function has finished executing, this is called closure


//Closures in functional programing
function add(x){
    function addY(y){
        return x + y;
    }
    return addY;
}
function minus(x){
    function minusY(y){
        return x-y;
    }
    return minusY;
}
console.log(add(5)(2))
console.log(minus(7)(4))