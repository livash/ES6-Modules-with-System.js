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
    q.enqueue("C");
    expect(q.first.val).toBe("A");
    expect(q.last.val).toBe("C");
  });

  it("should be able to remove elements from the queue", function() {
    var q = new Q.Queue();
    q.enqueue("A");
    q.enqueue("B");
    q.enqueue("C");
    var result = q.dequeue(); // "A" should be the first element to be dequeued
    expect(q.first.val).toBe("B");
    expect(q.last.val).toBe("C");
    expect(result).toBe("A");
  });

  it("should print out the elements in the queue", function() {
    var q = new Q.Queue();
    q.enqueue("A");
    q.enqueue("B");
    q.enqueue("C");
    expect(q.toString()).toBe("A < B < C < ");
  });
});