class Node {
  value: any;
  prev: Node | null;
  next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: any): void {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      if (this.head) {
        this.head.prev = node;
      }
      this.head = node;
    }
    this.size++;
  }

  append(value: any): void {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront(): any | null {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head!.value;
    this.head = this.head!.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  removeFromEnd(): any | null {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail!.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    }
    this.size--;
    return value;
  }

  print(): void {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let list = '';
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }

  printReverse(): void {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.tail;
      let list = '';
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.prev;
      }
      console.log(list);
    }
  }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
list.printReverse();
list.removeFromEnd();
list.print();
list.removeFromFront();
list.print();
