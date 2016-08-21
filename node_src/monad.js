function Monad(modifier) {
  var prototype = Object.create(null);
  function unit(value) {
    var monad = Object.create(prototype);

    monad.bind = function(func, args) {
      var allArgs = [value].concat(Array.prototype.slice.apply(args || []));
      return func.apply(undefined, allArgs);
    }

    if (typeof modifier === 'function') {
      modifier(monad, value);
    }

    return monad;
  }

  unit.method = function(name, func) {
    prototype[name] = func;
    return unit;
  };

  // adds new funciton to the unit object
  unit.lift = function(name, func) {
    prototype[name] = function(args) {
      return unit(this.bind(func, args));
    };
    return unit;
  };

  return unit;
}

// ---- Use Example ----

var ajax = Monad().lift('myFunc', myFunc);
function myFunc(str) {
  console.log(str);
}

var monad = ajax("Hello from Olena");
monad.bind(myFunc);  // calls to monad.bind(myFunc), or monad.myFunc() produce the same result
monad.myFunc();

// ---- Example Using Monad with modifier ----
var myModifier = function(monad, value) {
  if (value === null || value === undefined) {
    monad.is_null = true;
    monad.bind = function() {
      return monad;
    }
  }
}
var maybe = Monad(myModifier);
var monad_two = maybe(null);
monad_two.bind(myFunc);

module.exports = {
  Monad: Monad
}