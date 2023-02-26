/** Convert the given number into a roman numeral. **/
/**                                                **/
/** Roman 	Arabic                                 **/
/**    M	    1000                                 **/
/**   CM	     900                                 **/
/**    D	     500                                 **/
/**   CD	     400                                 **/
/**    C	     100                                 **/
/**   XC	      90                                 **/
/**    L	      50                                 **/
/**   XL	      40                                 **/
/**    X	      10                                 **/
/**   IX	       9                                 **/
/**    V	       5                                 **/
/**   IV	       4                                 **/
/**    I	       1                                 **/
/** All roman numerals answers should be provided  **/
/** in upper-case.                                 **/

function convertToRoman(numToConv) {
 
let nums=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
let romans=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

let romRes="";
while(numToConv > 0){ 
  for(let i=0; i<romans.length; i++){
    if(numToConv >= nums[i]){
      numToConv=numToConv-nums[i]; 
      romRes=romRes+romans[i];
      break;
    }
  }
}
 return romRes;
}



convertToRoman(36);
