import readline from 'readline-sync';
const main = () => {
let array=[];
getArray(array);
displayArray(array)
}
const getArray = (array) => {
var limit=readline.question("enter array limit");
console.log("enter array values")
for(var i=0;i<limit;i++){
array.push(readline.question());
}
}
const displayArray = (array) =>{
console.log(array);
}
main()