class Stack<T> {
  private items: Record<number, T>;
  private head: number;

  constructor() {
    this.items = {};
    this.head = 0;
  }

  push(element: T): void {
    this.items[this.head] = element;
    this.head++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.head--;
    const item = this.items[this.head];
    delete this.items[this.head];
    return item;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.head - 1];
  }

  size(): number {
    return this.head;
  }

  isEmpty(): boolean {
    return this.head === 0;
  }

  print(): void {
    console.log(this.items);
  }
}

const stack = new Stack<number>();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();
