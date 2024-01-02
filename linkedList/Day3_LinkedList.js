class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  addFirst(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null;

    while (curr != null) {
      let next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  printLinkedList() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.addFirst(5);
linkedList.addFirst(1);

console.log("\nOriginal Linked List:");
linkedList.printLinkedList();

linkedList.reverse();

console.log("\nReversed Linked List:");
linkedList.printLinkedList();
