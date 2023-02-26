function palindrome(str) {
  let regex=/\W|_/g;
  str=str.toLowerCase().replace(regex,"");

return str.split("").reverse().join("")==str;
}

palindrome("eye");
