/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function swap(arr, i, j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    var head = 0,
        tail = nums.length - 1,
        i;

    while (nums[head] === 0) {
        head += 1;
    }

    while (nums[tail] === 2) {
        tail -= 1;
    }

    i = head;

    while (i <= tail) {
        switch (nums[i]) {
            case 0:
                swap(nums, i, head);
                head += 1;
                i += 1;
                break;
            case 1:
                i += 1;
                break;
            case 2:
                swap(nums, i, tail);
                tail -= 1;
                break;
        }
    }
};

var a = [2,1,1,0];
sortColors(a);