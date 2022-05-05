import readline from 'readline-sync';
var limit=Number(readline.question("enter a array limit"));
let array=[];
console.log("enter array values");
for(var i=0;i<limit;i++){
array.push(readline.question());
}
let sum=[];
for(var i=0;i<limit-1;i++){
sum.push(array[i]*array[i+1])
}
onsole.log(sum)