import { Node } from "./nodeClass.js";

export class Stack {
  contructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top : null;
    this.top = node;

    return this;
  }

  pop() {
    let result = this.top.value;
    this.top = this.top.next;

    return result;
  }

  print() {
    this.top.print();
  }
}