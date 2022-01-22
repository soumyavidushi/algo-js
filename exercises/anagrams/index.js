const anagrams = (str1, str2) => {
    const cleanStr1 = cleanString(str1);
    const cleanStr2 = cleanString(str2);
    const str1Map = buildStringMap(cleanStr1);
    const str2Map = buildStringMap(cleanStr2);

    if(Object.keys(str1Map).length !== Object.keys(str2Map).length) {
        return false;
    } 

    for(let char in str1Map) {
        if(str1Map[char] !== str2Map[char]) {
            return false;
        }
    }

    return true;
} 

cleanString = (str) => {
    return str.replace(/[^\w]/g,"").toLowerCase().split('');
}


buildStringMap = (str) =>{
    const charMap = {};
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

module.exports = anagrams;