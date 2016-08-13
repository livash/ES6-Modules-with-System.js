/*
  Given a 2D matrix of NxM dimentions
  print out everey element in the matrix
  using a spiral pattern
*/
var getLoopNumber = function(matrix) {
  var rows = matrix.length,
      cols = matrix[0].length;

  if (rows === cols || rows > cols) {
    return (rows % 2 === 0) ? rows/2 : Math.ceil(rows/2);
  } else { // rows < cols
    return (cols % 2 === 0) ? cols/2 : Math.ceil(cols/2);
  }
};

var printRow = function(m, rowNum, loop, direction) {
  var cols = m[0].length;
  var result = [];
  if (direction > 0) { // move from left tor right
    var first = loop,
        last = cols - loop - 1;
    for (var i = first; i <= last; i++) {
      result.push(m[rowNum][i]);
    }
  } else { // move from right to left
    var first = cols - loop - 1,
        last = loop;
    for (var j = first; j >= last; j--) {
      result.push(m[rowNum][j]);
    }
  }

  return result.join(',');
};

var printCol = function(m, colNum, loop, direction) {
  var rows = m.length;
  var result = [];
  if (direction > 0) { // move from top to bottom
    var start = loop + 1,
        finish = rows - loop - 2;
    for (var i = start; i <=finish; i++) {
      result.push(m[i][colNum]);
    }
  } else { // move from bottom to top
    var start = rows - loop - 2,
        finish = loop + 1;
    for (var j = start; j >=finish; j--) {
      result.push(m[j][colNum]);
    }
  }

  return result.join(',');
};

var loopShape = function(m, loop) {
  var rows = m.length,
      cols = m[0].length,
      loopNum = getLoopNumber(m);
  if (rows == cols) { // square matrix
    if (rows % 2 == 0) {
      return (loop < loopNum -1) ? 'rectangle' : 'square2x2';
    } else {
      return (loop < loopNum - 1) ? 'rectangle' : 'horizontalLine';
    }
  } else if (rows > cols) {
    if (cols % 2 == 0) {
      return (loop < loopNum - 1) ? 'rectangle' : 'none';
    } else {
      return (loop < loopNum - 1) ? 'rectangle' : 'verticalLine';
    }

  } else { // rows < cols
    if (rows % 2 == 0) {
      return (loop < loopNum - 1) ? 'rectangle' : 'none';
    } else {
      return (loop < loopNum - 1) ? 'rectangle' : 'horizontalLine';
    }
  }
}

var printLoop = function(m, loop) {
  var result = [];
  var rows = m.length,
      cols = m[0].length;
  switch(loopShape(m, loop)) {
    case 'square2x2':
      result.push(printRow(m, loop, loop, 1)); // move left to right
      result.push(printRow(m, rows-loop - 1, loop, -1)); // move right to left
      break;
    case 'rectangle':
      result.push(printRow(m, loop, loop, 1)); // move left to right
      result.push(printCol(m, cols - loop - 1, loop, 1)); // move top to bottom
      result.push(printRow(m, rows-loop -1, loop, -1)); // move right to left
      result.push(printCol(m, loop, loop, -1)); // move bottom to top
      break;
    case 'verticalLine':
      result.push(printRow(m, loop, loop, 1)); // move left to right
      result.push(printRow(m, rows-loop - 1, loop, -1)); // move right to left
      break;
    case 'horizontalLine':
      result.push(printRow(m, loop, loop, 1)); // move left to right
      break;
    case 'none':
      break;
  }
  return result.join(',');
};

var printSpiral = function(matrix) {
  var loopNum = getLoopNumber(matrix),
      loop = 0,
      result = [];
  while (loop < loopNum) {
    result.push(printLoop(matrix, loop));
    loop++;
  }

  // process result string to remove empty strings joined on ','
  result = result.join(',').replace(/,,/g, ',').replace(/,$/, '')

  return result;
};

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