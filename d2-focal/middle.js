const assertEqual = function(actual, expected) {

    if(actual === expected) {
        console.log("Assertion Passed: [actual] === [expected]");
    }
    else if (actual !== expected) {
        console.log("Assertion Failed: [actual] !== [expected] ");
    }

};

const middle = function(array) {
    let newArray = [];
    let index = 0;
    if (array.length <= 2) {
      return newArray;
    } else {
      if (array.length % 2 !== 0) {
        index = array.length / 2;
        newArray.push(array[Math.floor(index)]);
      } else {
        index = array.length / 2;
        newArray.push(array[index - 1]);
        newArray.push(array[index]);
      }
      return newArray;
    }
  };
  middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
 


  