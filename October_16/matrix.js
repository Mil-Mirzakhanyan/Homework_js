let matrix = [
  ['0', 'M', '0', 'M', '0'],
  ['0', '0', 'M', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['M', 'M', '0', '0', '0'],
  ['0', '0', '0', 'M', '0']
];

let n = matrix.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] === '0') {
      let count = 0;

     
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < n && y >= 0 && y < n && matrix[x][y] === 'M') {
            count++;
          }
        }
      }

      matrix[i][j] = count.toString();
    }
  }
}


matrix.forEach(row => console.log(row.join(' ')));