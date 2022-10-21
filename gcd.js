const readVal=require('prompt-sync')();
var num1=readVal("Enter Number-1");
var num2=readVal("Enter number-2");
var res=gcd(num1,num2);
console.log('GCD of '+num1+ ' and '+num2+' is '+res);
function gcd(n1,n2)
{
if(!n2)
return n1;
else
return (n2,n1%n2);
}
