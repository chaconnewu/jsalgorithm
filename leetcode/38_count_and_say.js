/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var cur = '1',
      i,
      j,
      res,
      pointer;

  for (i = 1; i < n; i += 1) {
    res = "";
    pointer = cur[0];
    pointerCnt = 1;
    for (j = 1; j < cur.length; j += 1) {

      if (cur[j] === pointer) {
        pointerCnt += 1;
      } else {
        res += pointerCnt.toString()+pointer;
        pointer = cur[j];
        pointerCnt = 1;
      }
    }
    res += pointerCnt.toString()+pointer;
    cur = res;
  }
  return cur;
};


// console.log(countAndSay(2));
var i;
for (i = 0; i < 10; i += 1) {
  console.log(countAndSay(i));
}
