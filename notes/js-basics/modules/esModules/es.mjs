//since we used mjs we can use es modules,
// another option is to add a package.json file


export function add(a,b){
    return a+b;
}

export function subtract(a,b){
    return a-b;
}

export const PI = 3.1415;

// //one option, not so popular
// export { add, subtract, PI}

//the other option is just to add the word export to the functionbs we wishh to export
//export default we can export single functions from the module