/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  var start = gas.length - 1,
      end = 0,
      tol = gas[start] - cost[start];

  while (start > end) {
    if (tol > 0) {
      tol += gas[end] - cost[end];
      end += 1;
    } else {
      start -= 1;
      tol += gas[start] - cost[start];
    }
  }

  if (tol >= 0) {
    return start;
  } else {
    return -1;
  }
};
