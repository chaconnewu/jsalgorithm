/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var his = {},
      cur = n,
      i,
      tol,
      tmp;
  
  while (true) {
    tol = 0;
    tmp = cur.toString();
    for (i = 0; i < tmp.length; i += 1) {
      tol += Math.pow(parseInt(tmp[i], 10), 2);
    }
    
    if (tol === 1) {
      break;
    }
    
    if (!his.hasOwnProperty(tol)) {
      his[tol] = 0;
      cur = tol;
    } else {
      return false;
    }
  } 
  
  return true;
};

console.log(isHappy(19));