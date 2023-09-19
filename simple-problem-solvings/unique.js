function unique(num)
{
    var uniqueArray = [];
    for(var i = 0; i < num.length; i++)
    {
        var element = num[i]
        var index = uniqueArray.indexOf(element)
        if(index == -1)
        {
            uniqueArray.push(element)
        }
    } 
    return uniqueArray; 

}

var num = [1,1,2,2,5,5,8,8,7,7,4,1,4,5,6]
var result = unique(num);
console.log(result);