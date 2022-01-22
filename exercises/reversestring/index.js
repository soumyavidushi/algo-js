function reverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return;
    }
   /* 
   Solution #1
   let reverseArray = [];
    const strArray = str.split("");
    for(let i=strArray.length-1;i>=0;i--) {
        reverseArray.push(strArray[i]);
    }
    return reverseArray.join(""); */
     
   /* Solution #2
   let reversed = '';
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
    */

   // solution #3
   // return str.split('').reverse().join('');

   // Solution #4
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

reverse('asdf');

module.exports = reverse;