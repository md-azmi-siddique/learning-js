var n = 13
for(i = 2; i < n; i++)
{
    if(n%i == 0)
    {
        console.log("not a prime number")
    }
    else{
        console.log("prime number")
        break
    }
}