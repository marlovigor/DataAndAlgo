


const containDups=(arr)=>{
const newMem = {};

  for(let i = 0; i < arr.length; i++){
    if(newMem[arr[i]] === undefined){
      console.log(arr[i])

      newMem[arr[i]] ="dam"
     }
     else{
      console.log("true")
      return true
     }
  }
  console.log(false)

  return false 
  




    
}

containDups([1,2,3,4,4,5,6,7])








// sortedArray=(nums1,m,num2,n)=>{
//   let first = m-1;
//   let second = n-1;
//   let i = m+n -1;
//   console.log(i)

//   while(second >= 0){
//     let fval =nums1[first]
//     // console.log(fval)
//   }





// }











//  sortedArray([1,2,3,4],4,[5,6,7,8,9],5)





// const array ={[1,2,3,4][5,6,7,8,8,10]}

// const sorted = function(arr1, arr2){
//   let arr = [];

//   while( )


// }


// sorted([1,2,3,4,5],[,6,7,8,8,10])


// function mergeSortedArrays(array1, array2){
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;
  
//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if(array1.length === 0) {
//     return array2;
//   }
//   if(array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item){
//    if(array2Item === undefined || array1Item < array2Item){
//      mergedArray.push(array1Item);
//      array1Item = array1[i];
//      i++;
//    }   
//    else {
//      mergedArray.push(array2Item);
//      array2Item = array2[j];
//      j++;
//    }
//   }
//   return mergedArray;
// }

// mergeSortedArrays([0,3,4,31], [3,4,6,30]);




// class myArray{
//     constructor(){
//     this.length = 0;
//     this.data = {};
//     }S

//   get(index){
//     console.log(this.data[index])
//   }

//   push(item){
//     this.data[this.length] = item;
//     this.length++;
//     return this.length

//   }
   
//   deleteAtIndex(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1]; 
//     }
//     console.log(this.data[this.length - 1]);
//     delete this.data[this.length - 1];
//     this.length--;
//   }
   

// }

// const arr = new myArray()

// // console.log(arr.get(2))
// arr.push('hello')
// arr.push('boom')

// console.log(arr)














// const numPlus = function(num1,num2){
//   return num1 + num2


// }
// console.log(numPlus(2,4))


// const animal = "tiget";

// const animals = new Array(4,animal);

// console.log(animals)



// const string = ["fall","summer","spring"];


// string.push("winter")

// console.log(string)


// class greeting{
//     constructor(name,title){
//         this.name = name;
//         this.title = title
//     }
//     greeting(){
//         console.log(`welcome mister ${this.name}, i heard you are our new ${this.title}....welcom aboard`)
//     }
// }

// const greet = new greeting("Jones", "Engineer")

// console.log(greet.greeting())