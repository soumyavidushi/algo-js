const maxChar = (val) => {
   let charMap = {};
   let maxChar = '';
   let max = 0;
  for(let item of val) {
       if(charMap[item]) {
           charMap[item]++;
       } else {
           charMap[item] = 1;
       }
    };
    for(let item in charMap) {
        if(charMap[item] > max) {
            max = charMap[item];
            maxChar = item;
        }
    };
    return maxChar;
}

module.exports = maxChar;