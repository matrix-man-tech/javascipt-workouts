import readline from 'readline-sync';
var height=Number(readline.question("enter your height"));
try {
if (isNaN(height)) throw "not a number";
if(height>8) throw "huge height";
if(height <=0) throw "tiny height"
console.log(height);
} catch (error) {
console.log(error);
}