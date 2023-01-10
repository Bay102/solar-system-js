const people = [
  // { name: "jon", age: 1},
  // { name: "peter", age: 2 },
  // { name: "andrey", age: 3 },
  // { name: "rachel", age: 4 },
];

export function minBy(array, cb) {
  let minAge = array[0]; 
  for (let i = 0; i < array.length; i++) {
    if (array[i].age < cb(minAge)) {
       minAge = array[i]; 
      }
    }
    return minAge
}

export function maxBy(array, cb) {
  let maxAge = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].age > cb(maxAge)) {
      maxAge = array[i];
    }
  }
  return maxAge
}
