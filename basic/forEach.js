const numbers = [1,2,3,4,,6,7,8,9]

const myFun = (value, index, array) =>{
    console.log(value)
    console.log(index)
    console.log(array)
    console.log("***********")
}

numbers.forEach(myFun)