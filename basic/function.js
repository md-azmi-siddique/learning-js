// function double(a){
//     var num = a*2;
//     return num;
// }

// var result = double(10)
// console.log(result)

let x = 2;
changeValueOfX(x)

function changeValueOfX(p){
    let x = 9;
    console.log("inside of function scope: "+x)
}

console.log("outside of function scope: "+x)
console.log(`my name is "azmi"`)