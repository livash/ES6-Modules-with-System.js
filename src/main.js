import { Animal } from './animal.js';
import * as math from "./math.js";
import { Node } from "./nodeClass.js";

//var math = new Math();

console.log("2π = " + math.sum(math.pi, math.pi));

// console.log('Hello');
// let dave = new Animal('Dave');
// console.log(dave);
// dave.sayHello();

// LINKED LIST
let list = new Node(1);
for (let i = 2; i < 13; i++) {
  list.addToTail(i);
}

let newNode = new Node(20);
list.addNodeToTail(newNode);
//Node.deleteNode(list, 10);

list.print();