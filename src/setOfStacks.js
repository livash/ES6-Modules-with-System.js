import { Stack } from './stack.js';
const SIZE = 3; // size of a stack in a stacks array

export class SetOfStacks {
  constructor() {
    let emptyStack = new Stack();
    this.stacksArray = [emptyStack];
  }

  size() {
    return this.stacksArray.length;
  }

  lastSubStack() {
    return this.stacksArray[this.size() - 1];
  }

  push(value) {
    let lastStack = this.lastSubStack();
    if (lastStack.size < SIZE) {
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
    if (lastStack.size === 0) {
      result = null;
    } else if (lastStack.size === 1) {
      result = lastStack.pop();
      this.stacksArray.pop();
    } else {
      result = lastStack.pop();
    }

    return result;
  }

  print () {
    console.log("------------ Stack of Stacks ------ ");
    for (let subStack of this.stacksArray) {
      subStack.print();
    }
    console.log("------------");
  }
}