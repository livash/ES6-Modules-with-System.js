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
    it("should throw an error if input argument is not a string", function() {
      expect(function() { string.compressString(100); }).toThrow("Input should be a string");
    });
  });
});