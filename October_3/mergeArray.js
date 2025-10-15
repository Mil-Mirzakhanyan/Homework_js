var array1 = [1, 2];
var array2 = [3, 4];

var mergedArray = [...array1, ...array2];
console.log(mergedArray);

var merge = [];
for (let i = 0; i < array1.length; i++) {
    merge.push(array1[i]);
}
for (let i = 0; i < array2.length; i++){
     merge.push(array2[i]);
    }
console.log(merge);