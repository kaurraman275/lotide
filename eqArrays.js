const assertEqual = function(actual, expected) {

    if(actual === expected) {
        console.log("Assertion Passed: [actual] === [expected]");
    }
    else if (actual !== expected) {
        console.log("Assertion Failed: [actual] !== [expected] ");
    }

};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const eqArrays  = function(var1,  var2)
{

}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // =>
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);