import { Node } from "./nodeClass.js";

export class NodeWithMin extends Node {
  constructor(value, min) {
    super(value);
    this.min = min;
  }
}