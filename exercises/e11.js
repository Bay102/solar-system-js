import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// Return example: ['name1', 'name2', ... , 'nameN']


export function lowMoonsPlanets({planets}) { 
  return planets.reduce((acc, planet) => { 
   return planet.moonsCount < 10 ? [...acc,planet.name] : acc 
  }, [])
}



// export function lowMoonsPlanets(data) {
//   const planets = data.planets; 
//    return planets.filter((planet) => planet.moonsCount < 10)
//    .map((planet) => planet.name)
// }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
