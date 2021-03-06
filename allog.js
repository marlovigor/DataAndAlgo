///recursive function to get all the children of a node///

///counting sheep

function countingdownSheep(num){
 if(num === 0){
    console.log( "All sheep jumped over the fence");     
 }
    else{
        let newNum = num - 1 ;
        countingdownSheep(newNum)
        console.log(newNum + ": Another sheep jumps over the fence");
    }
}

// countingdownSheep(10);


powerCalculator = (base, exp) => {
    if(exp < 0){
        return "exponent should be >= 0";
    }
    else if(exp === 0){
        return 1;
    }
    else{
        return base * powerCalculator(base, exp - 1);
    }
}

// console.log(powerCalculator(10, 2));


reverseString = (str) =>{
    if(str.length === 0){
        return "";
    }
    else{
        return reverseString(str.substr(1)) + str[0];
    }

}

// console.log(reverseString("hello"));


StringSplitter = (str) =>{
    if(str.length === 0){
        return "";
    }
    else{
        return str[0] + StringSplitter(str.substr(1));
    }
}
// console.log(StringSplitter("20/10/2020"));

factorial = (num) =>{
    if(num === 0){
        return 1;
    }
    else{
        return num * factorial(num - 1);
    }
}

// console.log(factorial(5));




var twoSum = function(nums, target) {
     
    let result = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
    
};

// console.log(twoSum([2, 7, 11, 15], 9));


function sum(array) {
    let sum = 0, ticks=1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        ticks++;
    }
    return {result: sum, ticks};
}

// console.log(sum([1,2,3,4,5]));


///
function getRandomItem(array) {
    let ticks = 0;
    // Get a random number and access that element in the array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks++;
    return {
        result: item,
        ticks: ticks
    };
}

// console.log(getRandomItem([1,2,3,4,5]));

//this is an example of o(n) constant time, this opteration took 1 operation to complete

///

// let count = 0;
// for(let i =0; i < array.length; i++){
//  if(array[i] < n){
//      count++;
//  }
//  return count;
// }

// }

// howManyLessThanNitems = (array, n) =>{
//     let count = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] < n){
//             count++;
//         }
//     }
//     return count;
// }

// . So howManyLessThanNitems([1, 2, 3, 4], 3) should be 2 because 1 and 2 are both less than 3.

function howManyLessThanNitems(arr, n) {
    let ticks = 0;
    /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
    if (!arr.length || arr[0] >= n) {
        ticks++;
        return 0;
    }

    let lowIndex = 0, highIndex = arr.length;

    while (highIndex > lowIndex) {
        // Find midpoint
        let midIndex = Math.floor((highIndex + lowIndex) / 2);
        /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
        if (arr[midIndex] >= n) {
            highIndex = midIndex;
            ticks++;
        }

        /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
        else if (arr[midIndex + 1] < n) {
            lowIndex = midIndex;
            ticks++;
        }

        /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
        else {
            ticks++;
            return {
                result: midIndex + 1,
                ticks: ticks
            }
        }
    }
}

// howManyLessThanNitems([1,2,3], 2);
// howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 );
// console.log(howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 ));


// isPalindrome = (num) =>{
//     let ticks = 0;
//     let numString = num.toString();
//     let reverseNumString = numString.split("").reverse().join("");
    
//     if(numString === reverseNumString){
//         ticks++;
//         console.log(ticks);
//         return true;
//     }
//     else{
//         ticks++;
//         console.log(ticks);

//         return false;

//     }
    
// }

// console.log(isPalindrome(1212121));

var isPalindrome = function(head) {
    
    

};