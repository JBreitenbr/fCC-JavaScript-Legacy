/** One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.       **/
/** In a shift cipher the meanings of the letters are shifted by some set amount.                             **/
/** A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.        **/
/** Thus A ↔ N, B ↔ O and so on.                                                                              **/
/** Write a function which takes a ROT13 encoded string as input and returns a decoded string.                **/
/** All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),  **/
/** but do pass them on.                                                                                      **/

function rot13(str) {
let alph="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rot="NOPQRSTUVWXYZABCDEFGHIJKLM";
let reg=/\W/g;
let targ="";
for (let i=0;i<str.length;i++){
  for(let j=0;j<26;j++){
     if(str[i]==rot[j]){
       targ+=alph[j];
     }
  }
  if(str[i].match(reg)!=null){
    targ+=str[i];
  }
}
  return targ;
}

rot13("SERR PBQR PNZC");
