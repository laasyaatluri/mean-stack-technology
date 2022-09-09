const prompt = require('prompt-sync')();
const num = prompt('Enter a number: ');
//num=Number(num);
even_check(num);
function even_check(num)
{
for(i=1;i<=num;i++)
{
if(i%2==0)
//const num = prompt('Enter a number: ');
console.log("%d is even",i);
}
}
//const num = prompt('Enter a number: ');
