function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

const numbers = [1, 2, 3, 4];
const hasEven = mySome(numbers, function(value) {
    return value % 2 === 0;
});

console.log(hasEven); 