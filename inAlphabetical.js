// This is a function which return the letters of the passed string in alphabetical order

function inAlphabetical(str){
    return str.split("").sort().join("");
}

console.log(inAlphabetical("webmasters"));