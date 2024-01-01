class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Adding Data to Linked List
const p1 = new Node(10);
const p2 = new Node(20);
const p3 = new Node(30);

// Linking Addresses to Nodes
p1.next = p2;
p2.next = p3;
const head = p1;

// Printing Linked List
let curr = head;
while (curr !== null) {
  console.log(" " + curr.data);
  curr = curr.next;
}
