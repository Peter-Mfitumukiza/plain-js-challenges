// We are going to write a function which returns the passed number in reverse order

function reverse(num){
    let numStr = num.toString();
    let numArray = numStr.split('');
    numArray = numArray.reverse().join('');
    num = parseInt(numArray);
    return num;
}

console.log(reverse(32243));