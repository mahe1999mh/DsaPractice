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
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }
  print() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  reveres() {
    let curr = this.head;
    let prev = null;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  addFist(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = curr;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  addGroup(arr) {
    arr.forEach((element) => {
      this.add(element);
    });
  }
  addByIndex(data, index) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let count = 0;
      let curr = this.head;

      while (count == index - 1) {
        count++;
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }
}

let linkedList = new LinkedList();
// linkedList.add(10);
// linkedList.add(20);
// linkedList.add(30);
// linkedList.add(40);
// linkedList.add(50);
// linkedList.add(60);
// linkedList.add(70);
// linkedList.addFist(1);
linkedList.addGroup([0, 9, 8, 7, 6, 5, 4, 3]);
linkedList.addByIndex(11, 3);

console.log("Original Linked List:");
linkedList.print();

console.log("\nReversed Linked List:");
linkedList.reveres();
linkedList.print();
