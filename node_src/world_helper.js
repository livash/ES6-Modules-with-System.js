// helper for the World class
function getBoard (rows, cols) {
  var array = [];
  for (var i = 0; i < rows; i++) {
    array.push(Array(cols));
  }

  return array;
}

module.exports = {
  getBoard: getBoard
}
