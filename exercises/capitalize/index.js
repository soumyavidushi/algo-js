const capitalize = (str) => {
    const strArr = str.split(" ");
    const words = [];
    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase()+word.slice(1));
    }
    return words.join(' ');
}

module.exports = capitalize;