/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    function stringPattern(s) {
        var resString = [],
            labelNumber = 1,
            charToNumberMap = {};

        for (i = 0; i < s.length; i += 1) {
            if (!charToNumberMap.hasOwnProperty(s[i])) {
                charToNumberMap[s[i]] = labelNumber;
                resString.push(labelNumber);
                labelNumber += 1;
            } else {
                resString.push(charToNumberMap[s[i]]);
            }
        }

        return resString.join("");
    }

    return stringPattern(s) === stringPattern(t);
};

var a = 'foo',
    b = 'bar';
console.log(isIsomorphic(a, b));

a = 'paper',
b = 'title';

console.log(isIsomorphic(a, b));
