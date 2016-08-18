// Setlers of Katan game
// in the beginning all tiles are land "0"
// write a function that converts a cell in the World
// to field, value "1", and returns a number of contiguous fields
// in the world 

helper = require('world_helper.js');

var World = function(n,m) {
  this.rows = n;
  this.cols = m;
  this.board = getBoard(n, m);
  this.fields = [];
}

World.prototype.addField = (r, c) {
  if (this.board[r][c] !== 1) {
    this.board[r][c] = 1;
    this.updateFileds(r,c);
  }

  return this.fileds.length;
}