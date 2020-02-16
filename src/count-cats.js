module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach( function(line) {
    line.forEach( function (element) {
      if (element === '^^') {
        count += 1
        }
      })
    });
  return count
};
