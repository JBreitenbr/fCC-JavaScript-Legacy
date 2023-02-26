/**  Return true if the passed string looks like a valid US phone number.   **/
/**                                                                         **/
/**  The user may fill out the form field any way they choose as long as    **/
/**  it has the format of a valid US number.                                **/
/**  The following are examples of valid formats for US numbers:            **/
/**   555-555-5555                                                          **/
/**  (555)555-5555                                                          **/
/**  (555) 555-5555                                                         **/          
/**   555 555 5555                                                          **/
/**  5555555555                                                             **/
/**  1 555 555 5555                                                         **/

let reg1=/^[0-9]{3,3}[\-][0-9]{3,3}[\-][0-9]{4,4}$/;
let reg2=/^[0-9]{1,1}[\s][0-9]{3,3}[\-][0-9]{3,3}[\-][0-9]{4,4}$/;
let reg3=/^[0-9][\s][0-9]{3,3}[\s][0-9]{3,3}[\s][0-9]{4,4}$/;
let reg4=/^[0-9]{10,10}$/;
let reg5=/^[1]{0,1}[\s]{0,1}[\(][0-9]{3,3}[\)][\s]{0,1}[0-9]{3,3}[\-][0-9]{4,4}$/;
function telephoneCheck(str) {
  let check=(reg1.test(str))||
  (reg2.test(str))||(reg3.test(str))||(reg4.test(str))||(reg5.test(str));
  
  return check;
}

telephoneCheck("555-555-5555");
