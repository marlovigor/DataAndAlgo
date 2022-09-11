// let myLinkedList = {
//     head:{
//         value:10,
//         next:{
//             value:5,
//             next:{
//                 valeu:16,
//                 next:null
//             }
//         }
//     }
// }

class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev:null
    };
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev:null,
      prev:null


    };
    newNode.next = this.head;
    this.head.prec= newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList(){
    const array =[];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev:null,


    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next= newNode;
    newNode.prev = leader
    newNode.next = follower;
    follower.prev= newNode
    this.length++
    return this.printList()
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
    ///
   const leader = this.traverseToIndex(index - 1);
   const unwantedNode = leader.next;
   leader.next =unwantedNode.next;
   this.length--;
   return this.printList()

    

  }

  reverse(){
    if(this.head.next){
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.nest = null;
    this.head = first;
    return this.printList()
  }
}

const newLinkedList = new linkedList(10);
newLinkedList.append(5);
newLinkedList.append(15);
newLinkedList.prepend(1);
newLinkedList.insert(2,20)
newLinkedList.printList();
// newLinkedList.append(10);
// console.log(newLinkedList.printList());
// console.log(newLinkedList.remove(2));
// console.log(newLinkedList);
console.log(newLinkedList.printList());
console.log(newLinkedList.reverse());


