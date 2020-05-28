// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  const FgRed = '\x1b[31m';
  const FgGreen = '\x1b[32m';
  if (actual !== expected) {
    console.log(
      FgRed,
      `🛑 Assertion Failed: [${actual}] === [${expected}]`,
      '\x1b[0m'
    );
  } else {
    console.log(
      FgGreen,
      `✅ Assertion Passed: [${actual}] === [${expected}]`,
      '\x1b[0m'
    );
  }
};

const head = function (arr) {
    return arr[0];
}


assertEqual(head([5,6,7]), 5); //it should pass the test case now, write 3 more test case (total two passing, two failing) then you will know you function is corr
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");