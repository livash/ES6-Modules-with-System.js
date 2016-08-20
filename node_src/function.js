// write a function called makeAdder
// var foo = makeAdder(3);
// foo(2); // -> 5

var makeAdder = function (x) {
  return function (y) {
    return x + y;
  };
}

// write a function that returns a function wrapped a round a slow processing function
// for example,
// var bar = makeRemember(slowFunction)

//bar("hello") -> 5 <slow>
//bar("hello") -> 5 <fast>

var makeRemember = function (slowFun) {
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

var callTimes = function (fun, num) {
  var counter = 0;
  var num = num || 1;
  return function () {
    if (counter >= num) {
      throw new Error('This function exceeded the limit of times to be called');
    } else {
      return fun.apply(null, arguments);
    }
  };
}

module.exports = {
  makeAdder: makeAdder,
  makeRemember: makeRemember,
  callTimes: callTimes
}