//reverses and prints the characters of a string

function FirstReverse(str) {
    let splitStringArray = str.split('');
    //console.log(splitStringArray);
    let reversedArray = splitStringArray.reverse();
    // console.log(reversedArray);
    let reversedString = reversedArray.join('');
    //console.log(reversedString);
    str = reversedString;
    // code goes here  
    return str;

}

// keep this function call here 
console.log(FirstReverse(readline()));