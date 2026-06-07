// In a high tech company
//  they are given an array of their Employees , 
// the HR Staff needs to find which employees have null or undefined data. 
// Using the Nullish Coalescing Operator print out the names of the employees
//  that having missing data.
let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},//mising id
  { name : "Alice" , id: 7 , age: null},//missing ag
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}//missing age and id
  ]
let emptyEmployees =[]
for (let employee of employeesArr) {
  // We use ?? to provide a fallback ("MISSING") if id or age is null/undefined
  const hasMissingId = (employee.id ?? "MISSING") === "MISSING";
  const hasMissingAge = (employee.age ?? "MISSING") === "MISSING";

  // If either property returned our fallback, we push the name
  if (hasMissingId || hasMissingAge) {
    emptyEmployees.push(employee.name);
  }
}
console.log(emptyEmployees)