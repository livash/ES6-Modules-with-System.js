// write a method called makeAdder
// var foo = makeAdder(3);
// foo(2); // -> 5

var makeAdder = function(x) {
  return function(y) {
    return x + y;
  }
}

module.exports = {
  makeAdder: makeAdder
}