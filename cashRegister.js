/**  Design a cash register drawer function checkCashRegister() that accepts purchase price as the  first      **/
/**  argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.  **/
/**  cid is a 2D array listing available currency.                                                             **/
/**  The checkCashRegister() function should always return an object with a status key and a change key.       **/
/**  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if    **/
/**  you cannot return the exact change.                                                                       **/
/**  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is     **/
/**  equal to the change due.                                                                                  **/
/**  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in      **/
/**  highest to lowest order, as the value of the change key.
/**             Currency               Unit	           Amount     **/
/**                Penny	            $0.01            (PENNY)    **/
/**               Nickel	            $0.05           (NICKEL)    **/
/**                 Dime	            $0.1              (DIME)    **/
/**              Quarter	            $0.25           (QUARTER)   **/
/**               Dollar	            $1                (ONE)     **/
/**         Five Dollars	            $5                (FIVE)    **/
/**          Ten Dollars	            $10                (TEN)    **/
/**       Twenty Dollars	            $20              (TWENTY)   **/
/**  One-hundred Dollars	            $100          (ONE HUNDRED) **/

function checkCashRegister(price, cash, cid) {

let coins=[100,20,10,5,1,0.25,0.1,0.05,0.01];

let cashCont=[];

for(let i=cid.length-1;i>=0;i--){
  cashCont.push(cid[i][1]);
}

let retAmount=cash-price;

function getCash(amount,cashArr){
let toGive=[];
while(cashArr.length>0){
        if(amount-cashArr[0]>=0){
        toGive.push(cashArr[0]);
        amount=amount-cashArr[0];
        }
        else{
        let hvar=(amount-((amount%coins[0]).toFixed(2)))/coins[0];
        toGive.push(parseFloat((hvar*coins[0]).toFixed(2)));
        amount=amount-hvar*coins[0];
        }
        cashArr.shift(cash[0]);
        coins.shift(coins[0]);
      }
   return toGive;
   }

   let sumCashCont=(cashCont.reduce((a,b)=>a+b,0)).toFixed(2);
let resArr=getCash(retAmount,cashCont);
let sumResArr=(resArr.reduce((a,b)=>a+b,0)).toFixed(2);
;
if(sumResArr < retAmount){
  
 return     {status: "INSUFFICIENT_FUNDS",   change: []};
}

else if(sumCashCont==retAmount){
  return {status:"CLOSED",
    change:cid};
}
else{

let _cid=cid.reverse();
for(let i=0;i<9;i++){
 _cid[i][1]=resArr[i];
}

let newCid=cid.filter((item)=>item[1]>0);
  return {status:"OPEN",change:newCid};
  
}
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
