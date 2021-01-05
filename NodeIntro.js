// piece of data - val 
// reference to next node - next 

class Node {
    constructor (val){
        this.val = val
        this.next = null 
    }  
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null 
        this.length = 0
    }

    push(val){
        var newNode = new Node(val) //makes new node 
        if(this.length === 0){
            this.head = newNode
            this.tail = this.head //sets to new node head and tail are the same thing  
        }  
        else {
            this.tail.next = newNode //took the current tail and added the newNode to the end of it 
            this.tail = newNode // update the tail to the newNode 
        }
        this.length ++
        return this 
    }

    pop(){
        if(!this.head){
            return undefined
        }
        var current = this.head 
        var newTail = current 

        while(current.next){//traversing the array 
            newTail = current 
            current = current.next 
        }

        this.tail = newTail //setting to previous node to be the new tail 
        this.tail.next = null //setting the next of the previous node to null 
        this.length --
        if(this.length ===0){
            this.head = null
            this.tail = null 
        }
        return current 

        /// Hello -> There -> Redwan 
        //  c           
        // nt 

    }

    shift() {
        if(!this.head) return undefined 
        var currentHead = this.head
        //var newHead = currentHead.next 
        this.head = currentHead.next 
        this.length--
        return currentHead
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode 
            this.tail = this.head
        }
        else{
            newNode.next = this.head 
            this.head = newNode 
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null 
        var count = 0
        var current = this.head  
        while(count !== index){
            current = current.next
            count++             
        }
        return current
    }

    set(val,index){
        // if(!this.get(index)){
        //     return false 
        // }
        // else {
        //     var current = this.get(index)
        //     current.val = val 
        //     return true 
        // }
        var foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val 
            return true 
        }
        return false 
    }

    insert(val,index){
        if(index < 0 || index >= this.length) return false
        else if (index === this.length) return !!this.push(val)
        else if (index === 0) return !!this.unshift(val)
        else {
            var prevNode = this.get(index-1)
            var afterNode = this.get(index)
            var newNode = new Node(val)
            newNode.next = afterNode
            prevNode.next = newNode
            this.length++
            return true 
        }
    }

    remove(index){
        if(index < 0 || index >= this.length) return false
        else if (index === this.length-1) return !!this.pop(index)
        else if (index === 0) return !!this.shift()
        else {
            var prevNode = this.get(index-1)
            var removed = prevNode.next 
            var nextNode = this.get(index+1)
            prevNode.next = nextNode
            this.length --  
            return removed 
        }
    }
    reverse(){
        var node = this.head 
        this.head = this.tail 
        this.tail = node 
        var prev = null 
        var next 
        for(var i = 0; i <this.length; i++){
            next = node.next 
            node.next = prev 
            prev = node 
            node = next 
        }
        return this
    }

    print() {
        var arr = []
        var current = this.head 
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

}

var list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(12)
list.push(13)
list.push(11)
list.print()
console.log(list.remove(2))

list.print()

//console.log(list.set(2,2))
