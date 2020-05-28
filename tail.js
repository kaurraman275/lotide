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

  const tail = function (arr) {
    return arr[1][2];
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 

//assertEqual(tail([5,6,7]), 6,7); //it should pass the test case now, write 3 more test case (total two passing, two failing) then you will know you function is corr
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse" , "Labs");
