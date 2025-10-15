function myIndexOf(array, searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i; 
        }
    }
    return -1; 
}


const numbers = [10, 20, 30, 20];
console.log(myIndexOf(numbers, 20));    

console.log(myIndexOf(numbers, 40));     