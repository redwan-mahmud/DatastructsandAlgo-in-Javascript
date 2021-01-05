/* Stacks 
-Last in first out LIFO 
- Used for function invocations (call stack), for operations like undo/redo and for routing, browsing history 
- Not built in data structure in JS but relatively easy to implement 
Big(O)
Insertion - O(1) 
Removal - O(1)
Searching - O(N)
Access - O(N)

Use push and pop for arrays, no need to re index 

*/


class Node{
    constructor(value){
        this.value = value
        this.next = null  
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0 
    }

    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode 
        }
        else { 
            var temp = this.first 
            this.first = newNode 
            this.first.next = temp 
        }
        return this.size++ 
    }

    pop(){
        if(!this.first) return null
        var temp = this.first 
        if(this.first === this.last){
            this.last = null 
        }
        
        this.first = this.first.next 
        
        this.size--
        return temp.value  
    }
}

var list = new Stack() 

list.push(1)
list.push(2)
list.push(300)
console.log(list.pop())
console.log(list)