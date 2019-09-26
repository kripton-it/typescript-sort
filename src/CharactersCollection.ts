import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftLetter = this.data[leftIndex].toLowerCase();
    const rightLetter = this.data[rightIndex].toLowerCase();
    return leftLetter > rightLetter;
  }

  swap(leftIndex: number, rightIndex: number): void {
    /*
    const start = this.data.slice(0, leftIndex);
    const end = this.data.slice(rightIndex + 1);
    this.data = start + this.data[rightIndex] + this.data[leftIndex] + end;
    */
    const characters = this.data.split("");
    [characters[rightIndex], characters[leftIndex]] = [
      characters[leftIndex],
      characters[rightIndex]
    ];
    this.data = characters.join("");
  }
}
