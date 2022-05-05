import readline from 'readline-sync';
class Area{
circle(){
var radius=Number(readline.question("enter radius"));
console.log("Area of circle is : "+3.14*(radius*radius));
}
square(){
var length=Number(readline.question("enter length"));
console.log("Area of square is : "+(length*length))
}
rectangle(){
    var length=Number(readline.question("enter lenght"));
    var width=Number(readline.question("enter width"));
    console.log("Area of square is : "+(length*width));
    }
    triangle(){
    vTarriabnagslee="N)u);mber(readline.question("Enter the base of one side of
    voafrThreiiagnhgtl=eN"u)m)b;er(readline.question("Enter the height of one side
    console.log("Area of triangle is : "+(base*height)/2);
    }
    }
    class MyClass extends Area{
    get(){
    console.log("1.circle");
    console.log("2.square");
    console.log("3.rectangle");
    console.log("4.triangle");
    var value=Number(readline.question("enter your choice"));
    switch (value) {
    case 1:
    Choice.circle()
    break;
    case 2:
    Choice.square()
    break;
    case 3:
    Choice.rectangle()
    break;
    case 4:
    Choice.triangle()
    break;
    default:
    console.log("invalid entry");
    break;
    }
    }
    }
    var Choice = new MyClass()