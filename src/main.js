import { Animal } from './animal.js';
import * as math from "./math.js";
import { Node } from "./nodeClass.js";
import { Stack } from "./stack.js";
import { StackWithMin } from "./minStack.js";
import { SetOfStacks } from "./setOfStacks.js";

//var math = new Math();

console.log("2π = " + math.sum(math.pi, math.pi));

// console.log('Hello');
// let dave = new Animal('Dave');
// console.log(dave);
// dave.sayHello();

console.log("---------------");

let s = new SetOfStacks();
for (let i = 1; i <= 10; i++) {
  s.push(i);
}

s.print();
s.pop();
s.pop();

s.print();