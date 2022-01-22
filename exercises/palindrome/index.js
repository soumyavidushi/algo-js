const palindrome = (str) => {
  return str === str.split('').reduce((rev, char) => char + rev,'');
 /* return str.split('').every((char, i) => {
        return char === str[str.length-i-1]
  }) */
}

module.exports = palindrome;