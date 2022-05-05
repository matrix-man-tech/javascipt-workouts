import readline from "readline-sync";
var limit=Number(readline.question("enter array limit"));
var array1=[];
var array2=[];
console.log("enter first array values");
for(var i=0;i<limit;i++){
array1.push(readline.question());
}
console.log("enter second array values");
for(var j=0;j<limit;j++){
array2.push(readline.question());
}
var temp;
temp=array1;
array1=array2;
array2=temp;
console.log("now first array"+array1);
console.log("now second array"+array2)