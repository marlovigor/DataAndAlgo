class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }

    ////RE GO OVER EACH FUNCTION MARLO
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  }
  
const linked = new LinkedList(10)
linked.append(12)
linked.append(33)
linked.append(24)
linked.prepend(44)
linked.insert(3,99)
console.log(linked)