// Methods related to processing of Matricies

/*
  Class Matrix
  @param columns - number of columns in a matrix
  @param rows - number of rows in a matrix
*/

class Matrix {
  constructor(columns, rows, defaultValue = '0') {
    this.rows = rows;
    this.columns = columns;
    let rows = new Array(rows);
    for (let i = 0; i < rows.length; i++) {
      rows[i] = [];
      for (let j = 0; j < columns; j++) {
        rows[i].push(defaultValue);
      }
    }
    this.matrix = rows;
  }

  nullifyRow(rowId) {
    let newRow = [],
        i = this.columns;
    while (i > 0) {
      newRow.push(0);
      i--;
    }

    this.matrix[rowId] = newRow;
  }

  nullifyColumn(colId) {
    this.matrix.forEach( row => {
      row[colId] = 0;
    });
  }

  findAllZeros() {
    let result = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        if (this.matrix[row][col] === 0) {
          result.push([row, col]);
        }
      }
    }

    return result;
  }

  print() {
    console.log('.................');
    for (let row = 0; row < this.matrix.length; row++) {
      console.log('[' + this.matrix[row] + ']');
    }
    console.log('.................');
  }
}

export { Matrix };