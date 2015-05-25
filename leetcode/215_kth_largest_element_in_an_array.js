/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var kth = nums.length - k;

  function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  function partition(arr, start, end) {
    var i = start+1,
        j = start+1;

    while (j <= end) {
      if (arr[start] > arr[j]) {
        swap(arr, i, j);
        i += 1;
      }
      j += 1;
    }
    i -= 1;
    swap(arr, start, i);
    return i;
  }

  return (function find(arr, start, end) {
    var i = partition(arr, start, end);
    if (i > kth) {
      return find(arr, start, i-1);
    } else if (i < kth) {
      return find(arr, i+1, end);
    } else {
      return arr[i];
    }
  }(nums, 0, nums.length-1));
};

console.log(findKthLargest([3,2,1,5,6,4], 2));
