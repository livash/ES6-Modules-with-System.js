// write a function called makeAdder
// var foo = makeAdder(3);
// foo(2); // -> 5

var makeAdder = function(x) {
  return function(y) {
    return x + y;
  };
}

// write a function that returns a function wrapped a round a slow processing function
// for example,
// var bar = makeRemember(slowFunction)

//bar("hello") -> 5 <slow>
//bar("hello") -> 5 <fast>

var makeRemember = function(slowFun) {
  var inputs = [],
      outputs = [];
  return function (x) {
    if (inputs.indexOf(x) >= 0) {
      var index = inputs.indexOf(x);
      return outputs[index];
    } else {
      inputs.push(x);
      var result = slowFun(x);
      outputs.push(result);
      return result;
    }
  };
}

module.exports = {
  makeAdder: makeAdder,
  makeRemember: makeRemember
}