var Q = require('../queue');

describe("Queue", function() {
  it("should be able to create an empty queue", function() {
    var q = new Q.Queue();
    expect(q.first).toBeNull();
    expect(q.last).toBeNull();
  });

  it("should be able to add a single value to the queue", function() {
    var q = new Q.Queue();
    q.enqueue("A");
    expect(q.first.val).toBe("A");
    expect(q.last.val).toBe("A");
  });

  it("should be able to have multiple items in the queueu", function() {
    var q = new Q.Queue();
    q.enqueue("A");
    q.enqueue("B");
    expect(q.first.val).toBe("A");
    expect(q.last.val).toBe("B");
  });
});