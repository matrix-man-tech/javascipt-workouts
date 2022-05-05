import readline from 'readline-sync';
var amount=Number(readline.question("enter your amount"));
var interest=Number(readline.question("enter interest rate"));
var years=Number(readline.question("numbers of years"));
var si=(amount*interest*years)/100
console.log(si)