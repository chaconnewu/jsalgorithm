/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var res = 0,
        i;

    for (i = 0; i < s.length; i += 1) {
        res *= 26;
        res += s.charCodeAt(i)-64;
    }

    return res;

};

console.log(titleToNumber('AB'));
