import readline from 'readline-sync';
var text = readline.question("enter a string");
let length=text.length
var temp=1;
for(var i=0;i<length/2;i++){
if(text[i]!=text[length-i-1]){
temp=0
}
}
if(temp==0){
console.log("its not palindrome");
}else{
console.log("its palindrome");
}