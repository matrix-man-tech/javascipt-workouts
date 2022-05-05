import readline from 'readline-sync';
const main = () => {
let array=[];
getArray(array);
displayArray(array)
}
const getArray = (array) => {
var limit=readline.question("enter array limit");
for(var i=0;i<limit;i++){
array[i]=[]
}
console.log("enter array values")
for(var i=0;i<limit;i++){
for(var j=0;j<limit;j++){
array[i][j]=readline.question();
}
}
}
function displayArray(array) {
    console.log(array);
}
main()
