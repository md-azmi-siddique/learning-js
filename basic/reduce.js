const numbers = [10,2,3,4,6,7,8,9]

const myFun = (total, value, index, array) =>{
    return total + value
}

let value = numbers.reduce(myFun, 10)   //10 is the starting position 
console.log('number: ' + numbers)
console.log('with  reduce: ' + value)  