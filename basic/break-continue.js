const num = [1,2,3,4,5,6,1,2,9,7]

// for (let i = 0; i < num.length; i++) {
//     if(num[i] > 3){
//         break;
//     }
//     console.log(num[i])
// }

const fun = (value) =>{
    if(value <= 3){
        console.log(value)
    }
}
let value = num.forEach(fun)
console.log(value)