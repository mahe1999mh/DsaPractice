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
  addGroupSort(arr) {
    arr.sort();
    arr.forEach((element) => {
      this.add(element);
    });
  }
  size() {
    let curr = this.head;
    let count = 0;
    while (curr !== null) {
      count++;
      curr = curr.next;
    }
    console.log("Size", count);
    return count;
  }
  indexOf(DataVal) {
    let curr = this.head;
    let count = 0;
    while (curr !== null) {
      count++;
      if (curr.data === DataVal) {
        console.log("indexOf", count);
        return count;
      }
      curr = curr.next;
    }
    console.log("indexOf", -1);
    return -1;
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
  addTwoArr(arr1, arr2) {
    let arr = [...arr1, ...arr2].sort();
    arr.forEach((element) => this.add(element));
  }
}

let linkedList = new LinkedList();
// linkedList.add(10);
// linkedList.addGroupSort([7, 6, 5, 4, 3, 0, 9, 8]);
// linkedList.addByIndex(11, 3);
linkedList.addTwoArr([1, 2, 3], [3, 1, 1]);
console.log("Original Linked List:");
linkedList.print();

// console.log("\nReversed Linked List:");
// linkedList.reveres();
// linkedList.print();
// linkedList.size();
// linkedList.indexOf(5);
