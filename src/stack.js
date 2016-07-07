import { Node } from "./nodeClass.js";

export class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top : null;
    this.top = node;
    this.length += 1;

    return this;
  }

  pop() {
    let result = this.top.value;
    this.top = this.top.next;
    this.length -= 1;

    return result;
  }

  get size() {
    return this.length;
  }

  print() {
    if (!!this.top) this.top.print();
    else console.log("Stack is empty");
  }
}