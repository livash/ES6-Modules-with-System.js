myFunction = require('../function');

describe('Module Functions that return Functions', function () {

  it('should return a function for all of it\'s members', function () {
    var method;
    for (method in myFunction) {
      var result = myFunction[method]();
      expect(typeof result).toBe('function');
    }
  });

  describe('makeAdder funciton', function () {


    it('produces a function which when called with one argument returns a sum of the two arguments', function () {
      var result = myFunction.makeAdder(1)(2);
      expect(result).toBe(3);
    });

    it('returns a a number NaN, when called twice with no arguments', function () {
      var result = myFunction.makeAdder()();
      expect(typeof result).toBe('number');
      expect(result).toBeNaN();
    });
  });

  describe('makeRemember funciton', function () {

  });
});