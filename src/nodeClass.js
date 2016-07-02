export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addToTail(value) {
    let endNode = new Node(value);
    let n = this;
    while (!!n.next) {
      n = n.next;
    }

    n.next = endNode;
  }

  addNodeToTail(node) {
    let n = this;
    while (!!n.next) {
      n = n.next;
    }
      n.next = node;
  }

  // return the length of linked list
  length() {
    let n = this;
    let result = 0;
    while (!!n) {
      result += 1;
      n = n.next;
    }

    return result;
  }

  // add another list to the end of an existing list
  // i.e. concatenate two lists together
  // for example, list1.concat(list2)
	concat(node) {
    let n = this;
    while(!!n.next) {
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
    if (head.value === value) {
      return head.next;
    }

    let n = head;
    while (!!n.next) {
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
    while (!!n) {
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

  static makeReverseList(numElements) {
    let list = new Node(numElements);
    for (let i = numElements - 1; i > 0; i--) {
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
    while (!!p2) {
      if(delta === k) {
        p1 = p1.next;
      } else {
        delta += 1;
      }

      p2 = p2.next;
    }

    return (delta === k) ? p1.value : null;
  }

  /*
    @param list - linked list
    @param x - value
    result - a linked list where nodes with value less than 'x' are on the left of x
            and nodes with value greater than 'x' are on the right of x.
  */
  static parseList(list, x) {
    let left, right;
    let n = list;
    while(!!n) {
      if (n.value > x) {
        if (!!right) {
          right.addToTail(n.value);
        } else {
          right = new Node(n.value);
        }
      } else if (n.value === x) {
        let newNode = new Node(x);
        newNode.next = right;
        right = newNode;
      } else { // add elements to the left linked list
        if (!!left) {
          left.addToTail(n.value);
        } else {
          left = new Node(n.value);
        }
      }

      n = n.next;
    }
    left.concat(right);

    return left;
  }

  print() {
    let n = this;
    let result = "";
    while(!!n.next) {
      result += n.value + "  >  ";
      n = n.next;
    }
    result += n.value;
    console.log(result);
  }
}