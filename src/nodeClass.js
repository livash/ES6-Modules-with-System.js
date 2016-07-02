export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addToTail(value) {
    let endNode = new Node(value);
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }

    n.next = endNode;
  }

  addNodeToTail(node) {
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = node;
  }

  print() {
    let n = this;
    let result = "";
    while(n.next !== null) {
      result += n.value + "  >  ";
      n = n.next;
    }
    result += n.value;
    console.log(result);
  }
}