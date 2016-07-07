import { Node } from "./nodeClass.js";

export class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top : null;
    this.top = node;
    this.size += 1;

    return this;
  }

  pop() {
    let result = this.top.value;
    this.top = this.top.next;
    this.size -= 1;

    return result;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (!!this.top) this.top.print();
    else console.log("Stack is empty");
  }
}