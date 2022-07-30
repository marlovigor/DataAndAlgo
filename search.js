function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);
}
// main();

// twoDarray = () => {

//     let arr = [[1,2,3],[4,5,6],[7,8,9]];
//     console.log(arr[1][1]);
// }
// twoDarray();


////Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.


 function twoDarray(){

    let arr = [[1,2,3],[4,0,6],[7,8,9]];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
            if(arr[i][j] === 0){
                arr[i] = [0,0,0];
                arr[j] = [0,0,0];
            }
        }
    }
    // console.log(arr);
}
// twoDarray();

class Memory {
    constructor() {
      this.memory = new Float64Array(1024);
      this.head = 0;
    }
  
    allocate(size) {
      if (this.head + size > this.memory.length) {
        return null;
      }
  
      let start = this.head;
  
      this.head += size;
      return start;
    }
  
    free(ptr) {}
  
    copy(toIdx, fromIdx, size) {
      if (fromIdx === toIdx) {
        return;
      }
  
      if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      }
    }
  
    get(ptr) {
      return this.memory[ptr];
    }
  
    set(ptr, value) {
      this.memory[ptr] = value;
    }
  }

  console.log(new Memory);
  
  module.exports = Memory;