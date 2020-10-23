
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
    for (let i = 0; i < matrix.length; i = i + 2) {
      matrix[i] = matrix[i].sort((a, b) => {
        return a - b;
      });
    }

    for (let i = 1; i < matrix.length; i = i + 2) {
      matrix[i] = matrix[i].sort((a, b) => {
        return b - a;
      });
    }

    return matrix.flat();
  } else {
    return [];
  }
}
