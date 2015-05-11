/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var carry = 1,
      i = digits.length-1,
      cur;

  while(i >= 0) {
    cur = digits[i] + carry;
    if (cur === 10) {
      digits[i] = 0;
      i -= 1;
    } else {
      digits[i] = cur;
      break;
    }
  }

  if (cur === 10) {
    digits.unshift(1);
  }

  return digits;
};


var a = [9];
console.log(plusOne(a));
