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

  // return the length of linked list
  length() {
    let n = this;
    let result = 0;
    while (n !== null) {
      result += 1;
      n = n.next;
    }

    return result;
  }

  /*
  @param head - first node in the linked list
  @param value - value of the node which needs to be removed
  return - first element of the linked list
  */
  static deleteNode(head, value) {
    if (head.value === value) {
      return head.next;
    }

    let n = head;
    while (n.next !== null) {
      if (n.next.value === value) {
        n.next = n.next.next;
        return head;
      }
      n = n.next;
    }
  }

  static removeDups(list) {
    let store = {};
    let previous = null;
    let n = list;
    while (n !== null) {
      if (store.hasOwnProperty(n.value)) {
        previous.next = n.next;
      } else {
        store[n.value] = 1;
        previous = n;
      }
      n = n.next;
    }

	  return list;
  }

  static makeListOf(numElements) {
    let list = new Node(0);
    for (let i = 1; i < numElements; i++) {
      list.addToTail(i);
    }

    return list;
  }

  static makeListWithDups() {
    let list1 = Node.makeListOf(5);
    let list2 = Node.makeListOf(5);
    list1.addNodeToTail(list2);

    return list1;
  }

  /*
    @param list - linked list, pointer to the head of a list
    @param k - the kth element from the end of the list
    return - the value of the kth element from the end of a list;
  */
  static getValueOfElement(list, k) {
	let p1 = list;
	let p2 = list.next;
	let delta = 1;

	// iterate over all elements in a list
	while (p2 !== null) {
		if(delta === k) {
			p1 = p1.next;
		} else {
			delta += 1;
		}

		p2 = p2.next;
	}

	  return (delta === k) ? p1.value : null;
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