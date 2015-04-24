/**
 * Insertion sort implementation
 * @param {array} arr This is the array need to be sorted.
 * @return {array} This function returns the array in asceding sorted format.
 */
function insertionSort(arr) {
    var i, j, key;
    if (arr.length <= 1) return arr;
    
    for (i = 1; i < arr.length; i += 1) {
	key = arr[i];
	j = i-1;

	while (j >= 0 && arr[j] > key) {
	    arr[j+1] = arr[j];
	    j -= 1;
	}
	
	arr[j+1] = key;
    } 
    
    return arr;
}

/**
 * Checking whether an array is sorted in asceding order.
 * @param {array} arr This is the array to be checked.
 * @return {boolean} This function returns whether the array is sorted or not.
 */
function checkSortedArray(arr) {
    var i;
    if (arr.length <= 1) return true;

    for (i = 1; i < arr.length; i += 1) {
	if (arr[i] < arr[i-1]) return false;
    }
    
    return true;
}


/**
 * Generating an array with random numbers (between 1 and 100).
 * @param {integer} len This is the length of the generated array.
 * @return {array} This function returns an array of randomly generated numbers.
 */
function arrayGenerator(len) {
    var arr = [],
	i;
    for (i = 0; i < len; i += 1) {
	arr.push(Math.floor(Math.random()*100+1));
    }
    
    return arr;
}

var a = arrayGenerator(10);
console.log('Original array');
console.log(a);
console.log('Sorted array');
console.log(insertionSort(a));
console.log(checkSortedArray(insertionSort(a)))