import readline from 'readline-sync';
var number=Number(readline.question("enter number"));
for(var i=1;i<=10;i++){
console.log(i+" * "+number+" = "+number*i);
}