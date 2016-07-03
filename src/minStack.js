// This Stack class keeps track of what is the min value in the stack

import { NodeWithMin } from "./minNodeClass.js";

export class StackWithMin {
  constructor() {
    this.top = null;
    this.min = null;
  }

  // add element to a stack
  push(value) {
    if (!this.top) {
      this.top = new NodeWithMin(value, value);
      this.min = this.top.min;
    } else { // this.top is present on the stack
      let newMin = Math.min(value, this.min);
      let newTop = new NodeWithMin(value, newMin);
      newTop.next = this.top;
      this.top = newTop;
      this.min = newMin;
    }
  }

  // remove element off the stack
  pop() {
    let item;
    if (!this.top) return null; // stack is empty
    if (!this.top.next) { // stack has only one element
      item = this.top.value;
      this.top = null;
      this.min = null;
    } else { // stack has more than one element
      item = this.top.value;
      this.top = this.top.next;
      this.min = this.top.min;
    }

    return item;
  }

  min() {
    return this.top.min();
  }

  print() {
    if (!!this.top) this.top.print();
    else console.log("Stack is empty");
  }
}