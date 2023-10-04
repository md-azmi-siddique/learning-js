const numbers = [1,2,3,4,6,7,8,9]

const myFun = (value, index, array) =>{
    return value > 2
}

let value = numbers.every(myFun) 
console.log('number: ' + numbers)
console.log('with every: ' + value) 
//result is false cause have to meet the condition in all the element