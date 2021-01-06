/*
Big O of BST 

Insertion - O(log n)
Searching - O(log n)

*/

class Node {
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        var newNode = new Node(value)
        if(this.root ===null){
            this.root = newNode 
            return this
        }else{
            var current = this.root 
            while(true){
                if(value === current.value) return undefined
                if (value<current.value){
                    if(current.left ===null){
                        current.left = newNode
                        return this
                    }  else{
                        current = current.left 
                    }
                }
                else if (value> current.value){
                    if(current.right === null){
                        current.right = newNode
                        return this 
                    } else{
                        current = current.right
                    }
                }
                               
            }
        }

    }

    find(value){
        if(this.root === null){
            return false
        }
        var current = this.root,
        found = false 
        while(!found && current){
            if(value<current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                found = true 
            }
        }
        if(!found) return false
        return current.value

    }
    
    BFS(){ //breadth first search 
        var data = [],
            queue = [],
            node = this.root //first element 
        queue.push(node) // 
        while(queue.length){
            node = queue.shift()
            console.log(node.value)
            data.push(node.value)                      //1st iter- adds to list| 2nd iter  
            if(node.left) queue.push(node.left) //6 gets added          |
            if(node.right) queue.push(node.right) //15 gets added        |
        }
        return data;
    }

    DFSPreOrder(){
        var data = []
        var current = this.root
        function traverse(node){
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data 
    }

    DFSPostOrder(){
        var data = []
        var current = this.root 
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data 
    }
    DFSInOrder(){
        var data = []
        var current = this.root 
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)       
        }
        traverse(current)
        return data 
    }
}

//              10
//          6        15      
//      3      8         20
// queue  []
// data [10,6,15,3,8,20] BFS 

var t = new BinarySearchTree()
t.insert(10)
t.insert(6)
t.insert(15)
t.insert(3)
t.insert(8)
t.insert(20)

console.log(t.DFSInOrder())
//console.log(tree)