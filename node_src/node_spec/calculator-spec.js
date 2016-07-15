var calculator = require('../calculator');

describe("multiplication", function() {
  it("should multiply 2 and 5", function() {
    var product = calculator.multiply(2,5);
    expect(product).toBe(10);
  });
});

describe("summation", function() {
  it("should sum 2 and 2", function() {
    var product = calculator.sum(2,2);
    expect(product).toBe(4);
  })
})