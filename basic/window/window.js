let name = 'kuddus';

function add(num1, num2){
    console.log(`this is ${name}`)
    let result = num1 + num2;
    function double(num){
        return num * 2;
    }
    let total = double(result);
    return total;
}

let sum = add(2,3);
console.log(sum);