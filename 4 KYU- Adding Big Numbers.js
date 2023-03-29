// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives
// }

// Solution

function add(a, b) {
  let res = "";
  let sum;
  let carry = 0;
  while (a.length < b.length) {
    a = "0" + a;
  }
  while (b.length < a.length) {
    b = "0" + b;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    res = carry + res;
  }

  return res;

}
