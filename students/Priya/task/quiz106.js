var myarray =['80','90', 100];

function compare (a,b){
    return a-b ;
}

var a = myArray.sort();
var b = myArray.sort(compare);
console.log(a===b);