function reverse(original) {
  var input = process.argv[2];

if (input) {
  return original.split('').reverseList().join('');

console.log(reverse(input));
}
}
