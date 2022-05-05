import readline from 'readline-sync';
var mark = Number(readline.question("enter your mark"));
if(mark<50 && mark>=0){
console.log("failed");
}else if(mark>=50 && mark<=100){
console.log("passed");
}else{
console.log("invalid entry")
}