import readline from 'readline-sync';
const main = () =>{
var get= getArray();
var arr=get[0]
var limit=get[1]
var arr1=get[2]
var sum= addArray(arr,limit,arr1);
displayArray(sum)
const getArray = () =>{
    var limit=Number(readline.question("enter array limit"));
    let arr=[];
    for(var i=0;i<limit;i++){
    arr[i]=[];
    }
    console.log("enter first array values");
    for(var i=0;i<limit;i++){
    for(var j=0;j<limit;j++){
    arr[i][j]=Number(readline.question());
    }
    }
    console.log("enter second array values");
    let arr1=[]
    for(var i=0;i<limit;i++){
    arr1[i]=[];
    }
    for(var i=0;i<limit;i++){
    for(var j=0;j<limit;j++){
    arr1[i][j]=Number(readline.question());
    }
    }
    return [arr,limit,arr1];
    }
    const addArray = (arr,limit,arr1) =>{
    let sum=[];
    for (let i = 0; i< limit; i++) {
    sum[i] = [];
    }
    for(var i=0;i<limit;i++){
    for(var j=0;j<limit;j++){
    sum[i][j]=arr[i][j]+arr1[i][j]
    }
    }
    return sum;
    }
    const displayArray = (sum) =>{
    console.log(sum);
    }
    main()