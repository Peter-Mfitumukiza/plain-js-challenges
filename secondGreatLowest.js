// A function which computes the second lowest and second greatest from an array of numbers

function secondLowestGreatest(arr){
    if(arr.length <2)
        return "Array is very short";
    if(arr.length == 2)
        return arr;
    
    arr.sort(function (a,b){
        return a-b;
    });
    let n = arr.length;
    return [ arr[1], arr[n-2]];
}

console.log(secondLowestGreatest([10,24,68,84,2]));