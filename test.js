const plusOne = function(digits) {
    ///study this solution
    let i = digits.length - 1;
    let val = 0;
    let carry = 1;
    while (i >= 0 && carry) {
      val = digits[i] + carry;
      carry = Math.floor(val / 10);
      digits[i] = val % 10;
      i--;
    }
    if (carry) digits.unshift(carry);
    return digits;



    
    // let num = [];
    // for(let i = 0; i < digits.length; i++) {
    //     // console.log(digits[i])
    //     num.push(digits[i])
    // }
    // console.log("this is num: ",num.length - 0)

    //  return num
}


console.log(plusOne([1,2,4,5,6]))
























// const romanToInt = function(s) {
//     const map = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };
//     let sum = 0;
//     let prev = 0;
//     for (let i = s.length - 1; i >= 0; i--) {
//         console.log( "i is:", i);
//         const curr = map[s[i]];
//         console.log( "curr is:", curr);
//         if (curr < prev) {
//         sum -= curr;
//         console.log( "sum is:", sum);
//         } else {
//         sum += curr;
//         console.log( "sum is:", sum);
//         }
//         prev = curr;
//         console.log( "prev is:", prev);
//     }
//     console.log( "sum is:", sum);

//     return sum;
    
    
// };

// console.log(romanToInt("MCMXCIV"));

// const removeDuplicates = function(nums) {
//     const length = nums.length;
  
//       if( length <= 1 ){
//           return length;
//       }
  
//       let i = 0;
  
//       for(let j = 1; j < length; j++){
//         // console.log( "nums[i] is:", nums[i]);
//           if( nums[i] != nums[j] ){
//               i++;
//             //   console.log( "i is:", i);
//               nums[i] = nums[j];
//             //   console.log( "nums[i] is:", nums[i]);
//           }
//       }
//     //   console.log( "i is:", i + 1);

//       return i + 1;
      
//   };

//   console.log( "removeDuplicates is:", removeDuplicates([1,1,2,3,3,4,5,5]));