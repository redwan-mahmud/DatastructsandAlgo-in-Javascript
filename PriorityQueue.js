class PriorityQueue {
    constructor(){
        this.values = []
        
    }

    enqueue(val, priority){
        let newNode = new Node(val,priority)
        this.values.push(newNode)
        //console.log(this.values)
        this.bubbleUp()
        //console.log(this.values)
    }
    bubbleUp(){
        let index = this.values.length -1
        const element = this.values[index]  
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            //console.log(parentIndex)
            let parent = this.values[parentIndex]
            if(element.priority >= parent.priority) break 
            this.values[parentIndex]= element
            this.values[index] = parent
            index = parentIndex
        }
    }

    dequeue(){
            const min = this.values[0]
            const end = this.values.pop() //extracts the last value
            
            if (this.values.length>0){
                this.values[0] = end //puts it at the top \
                this.sinkDown()
            }
            return min 
        }
        sinkDown(){
            let index = 0;
            const length = this.values.length 
            const element = this.values[0]
            while(true){
                let leftChildIndex = 2*index+1
                let rightChildIndex = 2*index +2
                let leftChild, rightChild
                let swap = null
                
                if(leftChildIndex < length){
                    leftChild = this.values[leftChildIndex]
                    if(leftChild.priority < element.priority){
                        swap = leftChildIndex
                    }
                }
                if(rightChildIndex < length){ 
                    rightChild = this.values[rightChildIndex]
                    if(rightChild > element){
                        if((swap === null && rightChild.priority < element.priority) ||
                        (swap!==null) &&(rightChild.priority < leftChild.priority)){
                            swap = rightChildIndex
                        }
                    }
                }

                if(swap === null) break
                this.values[index]= this.values[swap]
                this.values[swap]= element 
                index = swap 
            }
        console.log(this.values)
        }
    
}

class Node {
    constructor(val,priority){
        this.val = val
        this.priority = priority 
    }
}

let ER = new PriorityQueue()
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound",1)
ER.enqueue("high fever",4)
ER.enqueue("exploded head",0)
ER.enqueue("fracture",3)