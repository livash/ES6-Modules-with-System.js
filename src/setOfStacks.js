import { Stack } from './stack.js';
const SIZE = 5; // size of a stack in a stacks array

export class SetOfStacks {
  constructor() {
    this.stacksArray = [];
    this.stacksArray.push(new Stack());
  }

  size() {
    return this.stacksArray.length;
  }

  lastSubStack() {
    return this.stacksArray[this.size() - 1];
  }

  push(value) {
    let lastStack = this.lastSubStack();
    if (lastStack.length < SIZE) {
      lastStack.push(value);
    } else {
      let newStack = new Stack();
      newStack.push(value);
      this.stacksArray.push(newStack);
    }
  }

  pop() {
    let result;
    let lastStack = this.lastSubStack();
    if (lastStack.length === 0) {
      result = null;
    } else if (lastStack.length === 1) {
      result = lastStack.pop();
      lastStack = undefined;
    } else {
      result = lastStack.pop();
    }

    return result;
  }
}