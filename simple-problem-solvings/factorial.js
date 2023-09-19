//with loop
// function fact(n)
// {
//     let factorial = 1;
//     let i = 1;
//     while(i <= n){
//         factorial = factorial * i;
//         i++;
//     }

//     return factorial;
// }

//with recursion
function fact(n)
{
    if(n == 0)
    {
        return 1;
    }
    else{
        return n * fact(n-1);
    }
}
let result = fact(77);
console.log(result)