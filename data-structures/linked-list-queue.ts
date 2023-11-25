import LinkedList from './linked-list-tail';

class LinkedListQueue {
  private list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value: any): void {
    this.list.append(value);
  }

  dequeue(): any {
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

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());
