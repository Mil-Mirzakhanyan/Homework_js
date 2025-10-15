var numList = [3, 6, 9, 12];
var value = 9;

var index = numList.indexOf(value);
console.log(index); 

function indexOfValue(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1; 
}

var index = indexOfValue(numList, value);
console.log(index); 

console.log(indexOfValue(numList, 7)); 