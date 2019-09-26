import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(value: number): void {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
    return;
  }

  get length(): number {
    if (!this.head) return 0;
    let tail = this.head;
    let length = 1;
    while (tail.next) {
      tail = tail.next;
      length++;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("empty list");
    let tail: Node | null = this.head;
    let count = 0;
    while (tail) {
      if (count === index) {
        return tail;
      }

      count++;
      tail = tail.next;
    }

    throw new Error("there is no such index");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("empty list");

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.at(rightIndex).data, this.at(leftIndex).data] = [
      this.at(leftIndex).data,
      this.at(rightIndex).data
    ];
  }

  print(): void {
    if (!this.head) return;
    let tail: Node | null = this.head;
    while (tail) {
      console.log(tail.data);
      tail = tail.next;
    }
  }
}
