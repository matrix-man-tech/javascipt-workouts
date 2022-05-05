import readline from 'readline-sync';
var limit = readline.question("enter array limit");
let arr=[];
console.log("enter first array values");
for (let i = 0; i< limit; i++) {
arr[i] = []
}
for (let i = 0; i< limit; i++) {
for(let j = 0; j< limit; j++) {
arr[i][j]=Number(readline.question());
}
}
console.log("enter second array values");
let arr1=[];
for (let i = 0; i< limit; i++) {
arr1[i] = []
}
for (let i = 0; i< limit; i++) {
for(let j = 0; j< limit; j++) {
arr1[i][j]=Number(readline.question());
}
}
console.log("sum of 2 array");
let sum=[];
for (let i = 0; i< limit; i++) {
sum[i] = []
}
for (let i = 0; i< limit; i++) {
for(let j = 0; j< limit; j++) {
sum[i][j]=arr[i][j]+arr1[i][j]
}
}
console.log(sum)