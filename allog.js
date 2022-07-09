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

console.log(reverseString("hello"));




