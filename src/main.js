import { Animal } from './animal.js';
import * as math from "./math.js";
import { Node } from "./nodeClass.js";
import { Stack } from "./stack.js";
import { StackWithMin } from "./minStack.js";
import { SetOfStacks } from "./setOfStacks.js";
import * as stringHelper from "./strings.js";
import { Matrix } from "./matrix.js";

console.log(math.fibonacci(10));
console.log(math.getFibonacci(10));
console.log(math.lookAndSay(10));
console.log(math.lookAndSayElement(9));

console.log("----------");
console.log(stringHelper.removeSpaces("hello olena"));

console.log("----------");
console.log(stringHelper.compressString("aabbbbcc"));
console.log(stringHelper.compressString("abcde"));

console.log("----------");
let m = new Matrix(3,3,1);
m.matrix[1][1] = 0;
console.log(m.findAllZeros());
m.print();
m.nullifyRow(1);
m.nullifyColumn(1);
m.print();
