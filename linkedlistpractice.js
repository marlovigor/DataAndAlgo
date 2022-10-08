class linkedList{
    constructor(value){
        this.head={
            head:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }


    append(value){
        const newNode={
            head:value,
            next:null

        }
        console.log(newNode)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this
    }
    prepend(value){
        const newNode={
            head:value,
            next:null

        }
        console.log(newNode)
        this.next = newNode;
        this.length++
        return this

        
    }

    insert(value, index){

    }
}

const linked = new linkedList(10)
linked.append(12)
linked.append(33)
linked.append(24)
linked.prepend(44)
console.log(linked)