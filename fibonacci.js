// iterative way
// var fiboArray = [0,1]
// for(var i=2; i<=12; i++)
// {
//     fiboArray[i] = fiboArray[i-1] + fiboArray[i-2]
// }
// console.log(fiboArray)


//factorial way and recursive
// function fibo(n)
// {
//     if(n == 0)
//     {
//         return 0;
//     }
//     else if(n == 1){
//         return 1;
//     }
//     else{
//         return fibo(n-1)+ fibo(n-2);
//     }
// }

//fibonacci series recursve way
function fibonacci(n)
{
    if(n == 0)
    {
        return 0;
    }
    else if(n == 1)
    {
        return [0,1]
    }
    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2]
        fibo.push(nextElement)
        return fibo;
    }
}

let value = fibonacci(10)
console.log(value)