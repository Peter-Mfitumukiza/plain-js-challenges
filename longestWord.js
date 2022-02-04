// In this program we will be receiving a sentence and return the longest word in it.

function longestWord(sentence){
    let arr = sentence.split(" ");
    let maxLength = 0, longestIndex = 0;

    if(arr.length == 1)
        return sentence;
    
    for(let x=0; x<arr.length; x++){
            if(arr[x].length > maxLength){
                maxLength = arr[x].length;
                longestIndex = x;
            }
    }
    
    return arr[longestIndex];

}

console.log(longestWord("Web Development Tutorial."));