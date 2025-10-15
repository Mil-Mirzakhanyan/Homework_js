function stringLength(str) {
    return str.length;
}
console.log(stringLength("Hello"));

function strLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

console.log(stringLength("Hello"));