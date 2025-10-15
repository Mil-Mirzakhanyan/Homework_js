function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false; 
        }
    }
    return true; 
}


const numbers = [2, 4, 6, 8];
const allEven = myEvery(numbers, function(value) {
    return value % 2 === 0;
});

console.log(allEven); 

const someOdd = [2, 3, 4];
console.log(myEvery(someOdd, function(value) {
    return value % 2 === 0;
})); 