class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
        this.bottom = 0;
        this.length = 0;
    }
    peek(){
        return this.top;

    }

    push(value){
        const node = new Node(value);
        if (this.length === 0){
            this.top = node;
            this.bottom = node;
        } else{
             const holdingPointer = this.top;
             this.top = node;
             this.top.next = holdingPointer;


        }
        this.length++
        return this

    }
    pop(){
        if(!this.top){
            return null;
        }
        else{
            const holdingPointer = this.top;
            this.top = this.top.next;
            this.length--
            return this

        }

    }
}

const newStack = new Stack()
newStack.push('google')
newStack.push('netflix')
newStack.push('hulu')
newStack.push('meta')
newStack.pop()
console.log(newStack)

