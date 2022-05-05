import readline from 'readline-sync';
var limit=Number(readline.question("enter array limit"));
let array=[];
console.log("enter array values");
for(var i=0;i<limit;i++){
array.push(readline.question());
}
var even=[];
array.forEach(num=>{
if(num%2==0){
even.push(num);
}
})
let count=even.length;
console.log("Number of even numbers in the given array "+count)