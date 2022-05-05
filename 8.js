import readline from 'readline-sync';
var value=Number(readline.question("enter a number"));
var sum=0;
for(var i=1;i<=value;i++){
if(i%2!=0){
sum=sum+i;
}
}
console.log("sum of odd numbers "+sum)