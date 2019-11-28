class  BinaryHeap{


  constructor(){
    this.heap = [30, 20, 10, 7, 9, 5]
  }

}

 insert(value);{

    this.heap.push(value);
     this.bubbleUp();
  }


     bubbleUp();{
       let index =  this.heap.length-1;

    while( index > 0){
       let element = this.heap[index],
           parentIndex = Math.floor((index-1)/2),
           parent = this.heap[parentIndex],

       if(parent >= element) break
          this.heap[index] = parent;
         this.heap[parentIndex] = element;
          index = parentIndex

    }
  }