/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var line = [],
        tmpLine = [],
        i,
        j;

    for (i = 0; i <= n; i += 1) {
        line[i] = 1;
    }

    for (j = 1; j < m; j += 1) {
        tmpLine[0] = 0;
        for (i = 1; i <= n; i += 1) {
            tmpLine[i] = line[i] + tmpLine[i-1];
        }

        line = tmpLine;
    }

    return line[n];
};

console.log(uniquePaths(3, 7));

