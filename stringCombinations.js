// A function which returns a list of all possible combinations from a string

function possibleCombinations(str){
    let combinations = [];
    for(let i=0; i<str.length; i++){
        for(let x=i+1; x<=str.length; x++){
            let newComb = str.slice(i,x);
            if(!combinations.includes(newComb))
                combinations.push(newComb);
        }
    }
    return combinations;
}

console.log(possibleCombinations("Peter"));