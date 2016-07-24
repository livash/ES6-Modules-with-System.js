var string = require('../string');

describe("String related methods", function() {

  describe("isPalindrome method", function() {
    var methods = ["isPalindromeShort", "isPalindromeLong"];

    methods.forEach(function(method) {

      it("should return a boolean", function() {
        expect( typeof string[method]("hello") ).toBe("boolean");
      });

      it("should return false if a string is not a palindrome", function() {
        var result = string[method]('world');
        expect(result).toBeFalsy();
      });

      it("should return true if the string is a palindrome", function() {
        var result = string[method]('racecar');
        expect(result).toBeTruthy();
      });

    });

  });

});