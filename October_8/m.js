function myMap(array, callback) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
       
        const newValue = callback(array[i], i, array);
        result.push(newValue); 
    }
    return result; 
}

const numbers = [1, 2, 3, 4];

const doubled = myMap(numbers, function(value, index) {
    return value * 2;
});

console.log(doubled); 