/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    function fib(n) {
        var k, a, b;

        if (n+1 <= 2) {
            return 1;
        }

        k = Math.floor((n+1)/2);
        a = fib(k);
        b = fib(k-1);

        if ((n+1) % 2 == 1) {
            return a*a + b*b;
        } else {
            return b*(2*a - b);
        }
    }

    return fib(n);
};


console.log(climbStairs(40));
