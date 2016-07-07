import { Animal } from './animal.js';
import * as math from "./math.js";
import { Node } from "./nodeClass.js";
import { Stack } from "./stack.js";
import { StackWithMin } from "./minStack.js";
import { SetOfStacks } from "./setOfStacks.js";
import { uniqueChars, hasAllUniqueChars } from "./strings.js";

console.log("---------------");
console.log(uniqueChars("Hello"));
console.log(hasAllUniqueChars("hello"));
console.log(hasAllUniqueChars("elo"));

let s = new SetOfStacks();
for (let i = 1; i <= 10; i++) {
  s.push(i);
}

s.print();
s.pop();
s.pop();

s.print();