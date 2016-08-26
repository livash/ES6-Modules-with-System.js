// Simple imperative solution
// You can create a solution based on the number of steps and walk directions.
function printSpiral(matrix) {
    var startRow = 0,
        endRow = matrix.length - 1,
        startCol = 0,
        endCol = matrix[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        
        // print first row
        for (var i = startCol; i <= endCol; i++) {
            console.log(matrix[startRow][i]);
        }
        startRow++;

        // print last col
        for (var i = startRow; i <= endRow; i++) {
            console.log(matrix[i][endCol]);
        }
        endCol--;

        // print last row inverse order
        // need to protect against nxm, where n > m
        if (startRow < endRow) {
            for (var i = endCol; i >= startCol; i--) {
                console.log(matrix[endRow][i]);
            }
            endRow--;
        }

        // print first col inverse order
        if (startCol < endCol) {
            for (var i = endRow; i >= startRow; i--) {
                console.log(matrix[i][startCol]);
            }
            startCol++;
        }
    }
}

// for Pablo
// var m = [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ];
// console.log(printSpiral(m));

module.exports = {
  printSpiral: printSpiral
}
