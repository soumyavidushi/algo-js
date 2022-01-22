const vowels = (str) => {
    const vowelArr =['a','e','i','o','u'];
    let counter = 0;
    for(let char of str.toLowerCase()) {
        if(vowelArr.includes(char)) {
            counter++;
        }
    }
    return counter;
    /*
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
    */
}

module.exports = vowels;