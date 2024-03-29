// see e16.md

export function find(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
