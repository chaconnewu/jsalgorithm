/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length <= 1) {
    return 0;
  }

  var stack = [],
      maxLength = 0,
      endIdx = -1,
      i = 0,
      len;

  for (; i < s.length; i += 1) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        endIdx = i;
      } else {
        var stackTop = stack.pop();
        if (stack.length === 0) {
          maxLength = Math.max(maxLength, i - endIdx);
        } else {
          maxLength = Math.max(maxLength, i - stack[stack.length-1]);
        }
      }
    }
  }

  return maxLength;
};


var a = "()(()())";
console.log(longestValidParentheses(a));
