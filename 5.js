import readline from 'readline-sync';
var mark=Number(readline.question("enter your mark"));
if(mark>=90 && mark<=100){
console.log("A grade");
}else if(mark>=80 && mark<=89){
console.log("B grade");
}else if(mark>=70 && mark<=79){
console.log("C grade");
}else if(mark>=60 && mark<=69){
console.log("D grade");
}else if(mark>=50 && mark<=59){
console.log("E grade");
}else if(mark>=0 && mark<=49){
console.log('failed');
}else{
console.log(chalk.red('invalid entry'));
}