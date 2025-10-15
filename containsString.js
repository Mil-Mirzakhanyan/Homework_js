function containsSubstring(str, substring) {
  return str.includes(substring);
}
console.log(containsSubstring("Learning JavaScript", "Java"));
console.log(containsSubstring("Hello World", "Java"));


function contains(str, substring) {
  for (let i = 0; i <= str.length - substring.length; i++) {
    let match = true;
    for (let j = 0; j < substring.length; j++) {
      if (str[i + j] !== substring[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}
