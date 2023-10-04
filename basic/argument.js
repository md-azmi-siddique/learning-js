function addSum (){
    //console.log(arguments)
    var sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum = sum + element;   
    }
    return sum; 
}

var res = addSum(2, 4, 5, 8);
console.log(res);
