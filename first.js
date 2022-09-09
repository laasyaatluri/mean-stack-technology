
const prompt = require('prompt-sync')();
console.log("Hello!CSE...");
a=20;
b=40;
c=a+b;
console.log("a+b is %d",c);


//reading num
const num = prompt('Enter a number: ');
console.log('Your number is =');
console.log(Number(num) + 4);


// reading name
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);