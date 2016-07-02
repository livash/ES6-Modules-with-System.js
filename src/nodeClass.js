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

  /*
  @param head - first node in the linked list
  @param value - value of the node which needs to be removed
  return - first element of the linked list
  */
  static deleteNode(head, value) {
    var n = head;
    if (n.value === value) {
      return head.next;
    }

    while (n.next !== null) {
      if (n.next.value === value) {
        n.next = n.next.next;
        return head;
      }
      n = n.next;
    }
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