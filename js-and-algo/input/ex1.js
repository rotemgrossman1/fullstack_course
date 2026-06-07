const myArgs = process.argv.slice(2);
const num1 = Number(myArgs[0]);
const operator = myArgs[1];
const num2 = Number(myArgs[2]);

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : 'Error (Divide by zero)'

} 
const answer = operations[operator] 
    ? operations[operator](num1, num2) 
    : 'Error (Invalid Operator)';
console.log(`${myArgs[0]} ${myArgs[1]} ${myArgs[2]} = ${answer}`);