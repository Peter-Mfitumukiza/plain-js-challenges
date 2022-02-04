// we are going to compute all factors of a positive number

function factors(num){
    let factorsArr = [];
    for(let x=1; x<=num; x++){
        if((num % x) == 0)
            factorsArr.push(x);
    }

    return factorsArr;
}

console.log(factors(15));