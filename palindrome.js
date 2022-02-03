
function isPalind(str){
    str = str.replace(/[^a-zA-Z0-9]/g,'');
    let reversed = str.split('').reverse().join('');
    if (reversed.toLowerCase() != str.toLowerCase())
        return false;
    return true;
}

console.log(isPalind("nurses run*"));