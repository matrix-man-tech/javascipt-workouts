import readline from 'readline-sync';
var limit=Number(readline.question("enter array limit"));
console.log("enter array values");
let array=[];
for(var i=0;i<limit;i++){
array.push(readline.question());
}
array.sort();
array.reverse();
console.log(array)