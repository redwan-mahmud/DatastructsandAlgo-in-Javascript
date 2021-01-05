/*
First in first out, FIFO 
Online video game queues 
Background tasks 
Uploading resources - depend on file sizes 
Printer queues 

BIG O of Queues 
Insertion O(1)
Deletion O(1)
Access O(N)
Searching O(N)

For Arrays use unshift to add at the beginning of the array and pop at the end 
*/
class Node{
    constructor(value){
        this.value = value 
        this.next = null 
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0 
    }

    enqueue(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode 
            this.last = newNode
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        return this.size++
    }

    dequeue(){
        if(!this.first) return null 

        var temp = this.first 
        if(this.first===this.last){ 
            this.last  = null 
        }
        this.first = this.first.next 
        this.size--
        return temp.value
    }
}

var queue = new Queue()
queue.enqueue("Hello")
queue.enqueue("How are you")
queue.enqueue("Goodbye")

console.log(queue.dequeue())
console.log(queue)
