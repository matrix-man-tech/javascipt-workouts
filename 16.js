import readline from 'readline-sync';
var number=readline.question("enter a number");
var temp=1;
for(var i=2;i<number;i++){
if(number%i==0){
temp=0;
}
}
if(temp==1){
console.log("its prime number");
}else{
console.log("its not prime number");
}