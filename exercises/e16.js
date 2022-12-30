import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;
  const allDiscoveryYears = asteroids.map((asteroid) => asteroid.discoveryYear);
  const mostFrequent = (arr) => {
    const counts = arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    const maxCount = Math.max(...Object.values(counts));
    return Number(Object.keys(counts).find((key) => counts[key] === maxCount));
  }
  return mostFrequent(allDiscoveryYears);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
