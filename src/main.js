import { Animal } from './animal.js';
import * as math from "./math.js";
import { Node } from "./nodeClass.js";
import { Stack } from "./stack.js";
import { StackWithMin } from "./minStack.js";

//var math = new Math();

console.log("2π = " + math.sum(math.pi, math.pi));

// console.log('Hello');
// let dave = new Animal('Dave');
// console.log(dave);
// dave.sayHello();

console.log("---------------");

let stack = new StackWithMin();
stack.push(10);
stack.push(3);
stack.push(5);
stack.push(1);

stack.print();
console.log(stack.min);

console.log("========");
stack.pop();
stack.print();
console.log(stack.min);

console.log("========");
stack.pop();
stack.print();
console.log(stack.min);

console.log("========");
stack.pop();
stack.print();
console.log(stack.min);

console.log("========");
stack.pop();
stack.print();
console.log(stack.min);
