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
}

var tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(12)
tree.insert(13)
tree.insert(11)
tree.insert(4)
console.log(tree.find(1))
//console.log(tree)