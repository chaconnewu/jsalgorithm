/**
 * Insertion sort implementation
 * @param {array} arr This is the array need to be sorted.
 * @return {array} This function return the array in asceding sorted format.
 */
function insertion_sort(arr) {
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
 * Generating an array with random numbers (between 1 and 100).
 * @param {integer} len This is the length of the generated array.
 * @return {array} This function return an array of randomly generated numbers.
 */
function array_generator(len) {
    var arr = [],
	i;
    for (i = 0; i < len; i += 1) {
	arr.push(Math.floor(Math.random()*100+1));
    }
    
    return arr;
}

var a = array_generator(10);
console.log('Original array');
console.log(a);
console.log('Sorted array');
console.log(insertion_sort(a));