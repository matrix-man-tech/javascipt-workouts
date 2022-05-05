import chalk from 'chalk';
class Main{
display(){
var num1=Number(readline.question("enter 2 number"));
var num2=Number(readline.question())
console.log(chalk.blue('1.ADDITION'));
console.log(chalk.blue('2.SUBTRACTION'));
console.log(chalk.blue('3.MULTIPLICATION'));
console.log(chalk.blue('4.DIVISION'));
var choice=Number(readline.question());
if(choice==1){
MyClass.add(num1,num2)
}else if(choice==2){
MyClass.sub(num1,num2)
}else if(choice==3){
MyClass.multiple(num1,num2)
}else if(choice==4){
MyClass.division(num1,num2)
}else{
console.log(chalk.red('invalid entry'));
}
}
add(num1,num2){
var sum=num1+num2;
console.log("sum of 2 numbers is "+sum);
}
sub(num1,num2){
var sub=num1-num2;
console.log("substract of 2 numbers "+sub);
}
multiple(num1,num2){
var multiple=num1*num2;
console.log("multiple of 2 numbers "+multiple);
}
division(num1,num2){
var division=num1/num2;
console.log("division of 2 numbers "+division);
}
}
let MyClass = new Main();
MyClass.display()