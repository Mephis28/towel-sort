
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = matrix.flat().sort((a, b) => {
    return a - b;
  });

  return result;
}
