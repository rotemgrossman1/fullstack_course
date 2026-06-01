const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]
const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}
const countryCity = function(country, city){
    return ` from ${city}, ${country}`;
}
const getCatch = function(catchphrase){
    return ` loves to say: "${catchphrase}"`
}
const getAge = function(age){
    if(age >= 55){
        return "a 55+ "
    }
    else if(age<21){
        return "un underage "
    }
    else{
        return `${age} year old `
    }
}


const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)}`//Yes - you can put a function call inside the tick quotes!
    summary += capitalize(person.profession)//call function for profession
    summary += countryCity(capitalize(person.country), capitalize(person.city))
    summary += getCatch(person.catchphrase)//call function for catchphrase
    return summary
}


console.log(getSummary(people_info[0]))

console.log(getSummary(people_info[1]))

console.log(getSummary(people_info[2]))











// Capitalize all proper nouns
// (Everything except the age is a proper noun: name, profession, city, country, catchphrase)

// Combine city and country
// Write them together with a comma: "City, Country"

// Format the age:

// If the person is under 21 → "Underage"
// If the person is older than 55 → "55+"
// Otherwise → show the age as-is
// Format the catchphrase:

// Put it in quotes
// Capitalize the first letter