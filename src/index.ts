import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([2, 1555, 3, -5, -6]);
numbersCollection.sort();
console.log(numbersCollection.data);

// *********************************

const stringCollection = new CharactersCollection("qBweRTaY");
stringCollection.sort();
console.log(stringCollection.data);

// *********************************

const list = new LinkedList();
list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);
list.add(-1);
list.print();
console.log("*********");

list.sort();
list.print();
