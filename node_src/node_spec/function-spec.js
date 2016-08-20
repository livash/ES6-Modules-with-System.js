myFunction = require('../function');

describe('Functions that return Functions', function () {

  describe('makeAdder funciton', function () {

    it('should return a function', function () {
      var result = myFunction.makeAdder(1);
      expect(typeof result).toBe('function');
    });

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
});