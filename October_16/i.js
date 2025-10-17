const matrix = [
  ['0', 'M', '0', 'M', '0'],
  ['0', '0', 'M', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['M', 'M', '0', '0', '0'],
  ['0', '0', '0', 'M', '0']
];

const n = matrix.length;
const result = Array.from({ length: n }, () => Array(n).fill('0'));


const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1],          [0, 1],
  [1, -1], [1, 0], [1, 1]
];


for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] === 'M') {
      result[i][j] = 'M';
    } else {
      let count = 0;
      
      for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;
        
        if (x >= 0 && x < n && y >= 0 && y < n && matrix[x][y] === 'M') {
          count++;
        }
      }
      result[i][j] = count.toString();
    }
  }
}


for (const row of result) {
  console.log(row.join(' '));
}