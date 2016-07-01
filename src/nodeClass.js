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

  print() {
    let n = this;
    let result = "";
    while(n.next !== null) {
      result += n.value + "  >  ";
      n = n.next;
    }

    console.log(result);
  }
}