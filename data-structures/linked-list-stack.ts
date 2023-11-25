import LinkedList from './linked-list-tail';

class LinkedListStack {
  private list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  push(value: any): void {
    this.list.prepend(value);
  }

  pop(): any {
    return this.list.removeFromFront();
  }

  peek(): any {
    return this.list.head?.value;
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  getSize(): number {
    return this.list.getSize();
  }

  print(): void {
    this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
