function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      let element = line[i];
      console.log(element);
    }
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix);
