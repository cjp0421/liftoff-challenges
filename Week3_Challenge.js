function LongestWord(sen) {



    let wordArray = sen.split(' ');

    let regex = /[a-zA-Z0-9]/g

    // console.log(wordArray[i].match(regex).length);
    let longestWord = wordArray.sort(function (a, b) {
        return b.match(regex).length - a.match(regex).length;
    });


    return longestWord[0];



}

// keep this function call here 
console.log(LongestWord(readline()));