class Node {
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      let prev = this.head;
      while (prev!.next !== this.tail) {
        prev = prev!.next;
      }
      prev!.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  reverse(): void {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  print(): void {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let list = '';
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

export default LinkedList;

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
console.log(list.getSize());
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();
