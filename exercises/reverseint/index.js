const reverseInt = (val) => {
    const reverseStr = val.toString().split('').reverse().join('');
    return parseInt(reverseStr) * Math.sign(val);
}

module.exports = reverseInt;