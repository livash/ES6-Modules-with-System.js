import { Node } from "./nodeClass.js";

export class Queue {
  contructor() {
    this.first = null;
    this.last = null;
  }

  // add item to the queue
  enqueue(value) {
    if (!!this.first) {
      this.last = new Node(value);
      this.first = this.last;
    } else {
      this.last.next = new Node(value);
      this.last = this.last.next;
    }
  }

  // remove first item off the queue
  dequeue() {
    if (!!(this.first)) {
      let result = this.first.value;
      this.first = this.first.next;
      if (!this.first) {
        this.last = null;
      }

      return result;
    }

    return null;
  }

  print() {
    this.first.print();
  }
}