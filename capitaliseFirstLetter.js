// For this function we will capitalise the first letter of each word in the passed string

function capitaliseFirst(str) {
    let strArray = str.split(" ");
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1, strArray[i].length);
    }

    return strArray.join(" ");
}

console.log(capitaliseFirst("it is working."));
