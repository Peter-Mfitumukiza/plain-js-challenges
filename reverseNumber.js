
function reverse(num){
    let numStr = num.toString();
    let numArray = numStr.split('');
    numArray = numArray.reverse().join('');
    num = parseInt(numArray);
    return num;
}

console.log(reverse(32243));