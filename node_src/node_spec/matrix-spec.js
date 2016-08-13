var matrix = require('../matrix');

describe('printSpiral function', function() {
  it('should return a string', function() {
    var result = matrix.printSpiral([[],[]]);
    expect(typeof result).toBe('string');
  });

  it('should iterate correctly over a 1x3 square matrix', function() {
    var m = [[1,2,3]];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3');
  });

  it('should iterate correctly over a 3x1 square matrix', function() {
    var m = [
      [1],
      [2],
      [3]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3');
  });

  it('should iterate correctly over a 2x2 square matrix', function() {
    var m = [[1,2], [4,3]];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4');
  });

  it('should iterate correctly over a 3x3 square matrix', function() {
    var m = [
      [1,2,3],
      [8,9,4],
      [7,6,5]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4,5,6,7,8,9');
  });

  it('should iterate correctly over a 4x4 square matrix', function() {
    var m = [
      [1, 2, 3, 4],
      [12,13,14,5],
      [11,16,15,6],
      [10,9, 8, 7]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16');
  });

  it('should iterate correctly over a 4x2 matrix', function() {
    var m = [
      [1,2],
      [8,3],
      [7,4],
      [6,5]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4,5,6,7,8');
  });

  it('should iterate correctly over a 2x4 matrix', function() {
    var m = [
      [1,2,3,4],
      [8,7,6,5]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4,5,6,7,8');
  });

  it('should iterate correctly over a 3x4 square matrix', function() {
    var m = [
      [1, 2, 3, 4],
      [10,11,12,5],
      [9, 8, 7 ,6]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4,5,6,7,8,9,10,11,12');
  });

  it('should iterate correctly over a 4x3 square matrix', function() {
    var m = [
      [1, 2, 3],
      [10,11,4],
      [9, 12,5],
      [8, 7, 6]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4,5,6,7,8,9,10,11,12');
  });

  it('should iterate correctly over a 5x3 square matrix', function() {
    var m = [
      [1, 2, 3],
      [12,13,4],
      [11,14,5],
      [10,15,6],
      [9, 8, 7]
    ];
    var result = matrix.printSpiral(m);
    expect(result).toBe('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
  });
});