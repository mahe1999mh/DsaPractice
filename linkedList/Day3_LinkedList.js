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

function addFist(data){
    const newNode = new Node(data);
    if(!head){
        this.head = newNode;
    }else{
        newNode.next = head;
        head = newNode
    }
}

add(10);
add(20);
add(30);
addFist(5)
addFist(1)

printLinkedList(head);
