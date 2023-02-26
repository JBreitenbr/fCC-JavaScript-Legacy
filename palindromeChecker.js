/** Return true if the given string is a palindrome. Otherwise, return false. **/
/** A palindrome is a word or sentence that's spelled the same way both forward **/
/** and backward,ignoring punctuation, case, and spacing. **/

function palindrome(str) {
  let regex=/\W|_/g;
  str=str.toLowerCase().replace(regex,"");

return str.split("").reverse().join("")==str;
}

palindrome("eye");
