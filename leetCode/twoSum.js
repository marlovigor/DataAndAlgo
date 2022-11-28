const twoSum = (nums, target) => {
    const hash = {};
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        console.log("com: ",complement)

        if(hash.hasOwnProperty(complement)){
            console.log([ i , hash[complement]])
            return [ i , hash[complement]]

        } else{
            hash[nums[i]] = i;
        }
    }
}

console.log(twoSum([2,7,11,15], 17))
