import readline from 'readline-sync';
var income=Number(readline.question("enter annual income"));
if(income<250000){
console.log("no tax");
}else if(income>=250000 && income<=500000){
var tax=income*5/100;
console.log("income tax amount "+tax);
}else if(income>500000 && income<=1000000){
var tax=income*20/100;
console.log("income tax amount "+tax);
}else if(income>1000000 && income<5000000){
var tax=income*30/100;
console.log("income tax amount "+tax);
}else{
console.log("invalid entry");
}