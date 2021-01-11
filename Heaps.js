//representing a heap 
// parent node n 
// left 2n+1 
// right 2n+2 
//for any child at index n its parent index is at (n-1)/2 
//Inserion O LogN 
// Removal O logN
// Search O N 

class MaxBinaryHeap {
    constructor(){
        this.values = [41,39,33,18,27,12,55]
        
    }

    insert(element){
        
        this.values.push(element)
        //console.log(this.values)
        this.bubbleUp()
        console.log(this.values)
    }
    bubbleUp(){
        let index = this.values.length -1
        const element = this.values[index]  
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            //console.log(parentIndex)
            let parent = this.values[parentIndex]
            if(element <= parent) break 
            this.values[parentIndex]= element
            this.values[index] = parent
            index = parentIndex
        }
    }

        extractMax(){
            const max = this.values[0]
            const end = this.values.pop() //extracts the last value
            
            if (this.values.length>0){
                this.values[0] = end //puts it at the top \
                this.sinkDown()
            }
            return max 
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
                    if(leftChild > element){
                        swap = leftChildIndex
                    }
                }
                if(rightChildIndex < length){ 
                    rightChild = this.values[rightChildIndex]
                    if(rightChild > element){
                        if((swap === null && rightChild > element) ||
                        (swap!==null) &&(rightChild > leftChild)){
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

let heap = new MaxBinaryHeap()
heap.extractMax()


//
