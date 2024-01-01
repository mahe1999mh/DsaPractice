class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = null; // Initialize head as null

function add(data) {
  const newNode = new Node(data);
  if (head === null) {
    head = newNode;
  } else {
    let curr = head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
}

function printLinkedList(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
}

add(10);
add(50);
add(50);
add(50);
add(50);
add(50);
add(50);
add(50);
add(50);
printLinkedList(head);
