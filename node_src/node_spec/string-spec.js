var string = require('../string');

describe("String related methods", function() {

  describe(" all methods should throw an error if input is not a string", function() {
    for (var method in string) {
      it( method + " should throw an error if input is not a string", function() {
        var func1 = function() {
          string[method](); // call method with undefined argument
        };
        var func2 = function() {
          string[method](100); // call method with a number argument
        }
        expect(func1).toThrow("Input should be a string");
        expect(func2).toThrow("Input should be a string");
      });
    }
  });

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

  describe("method uniqueChars", function() {
    it("should return an object", function() {
      var result = string.uniqueChars("hello");
      expect(typeof result).toBe("object");
    });

    it("should return an object with correct count", function() {
      var result = string.uniqueChars("hii");
      var expectedResult = {
        h: 1,
        i: 2
      };

      for ( var prop in result ) {
        expect( expectedResult.hasOwnProperty(prop) ).toBeTruthy();
        expect( expectedResult[prop] ).toBe(result[prop]);
      }
    });
  });

  describe("compressString method", function() {
  });
});