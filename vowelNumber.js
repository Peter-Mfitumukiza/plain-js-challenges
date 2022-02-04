// we are going to count number of vowels in a word

function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    let vowelsNum = 0;

    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase()))
            vowelsNum++;
    }

    return vowelsNum;
}

console.log(countVowels("The quick brown fox."))