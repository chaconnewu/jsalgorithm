/**
 * @param {number} n
 * @returns {number[][]}
 */
var generateMatrix = function(n) {
    var matrix = [],
        i,
        j,
        top = 0,
        bottom = n-1,
        left = 0,
        right = n-1
        square = n*n;

    for (i = 0; i < n; i += 1) {
        matrix[i] = [];
    }

    i = 1;
    j = left;
    while (i <= square) {
        for (; j <= right; j += 1) {
            matrix[top][j] = i;
            i += 1;

        }
        top += 1;
        j = top;

        for (; j <= bottom; j += 1) {
            matrix[j][right] = i;
            i += 1;

        }

        right -= 1;
        j = right;
        for (; j >= left; j -= 1) {
            matrix[bottom][j] = i;
            i += 1;
        }

        bottom -= 1;
        j = bottom;
        for (; j >= top; j-= 1) {
            matrix[j][left] = i;
            i += 1;
        }
        left += 1;
        j = left;

    }

    return matrix;
};

console.log(generateMatrix(4));
