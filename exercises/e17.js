// const callBack = (person) => person.age;

// const people = [
//   { name: "jon", age: 29 },
//   { name: "peter", age: 30 },
//   { name: "andrey", age: 22 },
//   { name: "rachel", age: 25 },
// ];

export function minBy(array, cb) {  
  for (const element of array) {
    let personAge = array[0]; 
    if (cb(element) < personAge.age) {
      return element
    }
  }
}
  


export function maxBy(array, cb) {
  for (const element of array) {
    let personAge = array[0]; 
    if (cb(element) > personAge.age) {
      return element
    }
  }
}
