function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        
        callback(array[i], i, array);
    }
}


const numbers = [1, 2, 3, 4];

myForEach(numbers, function(value, index) {
    console.log( index, value);
});