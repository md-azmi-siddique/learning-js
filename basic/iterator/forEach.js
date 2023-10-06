const numbers = [1,2,3,4,,6,7,8,9]

const myFun = (value, index, array) =>{
    //console.log(value)
    if(value %2 == 0){
        console.log(value)
    }
}

numbers.forEach(myFun)