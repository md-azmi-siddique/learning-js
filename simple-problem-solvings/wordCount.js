function wordCount(word)
{
    var count = 0;
    for(i = 0; i < word.length; i++)
    {
        var char = word[i]
        if(char == " ")
        {
            count++;
        }
    }
    count ++
    return count;
}

var sent = "bcls sfhsl sfhilshf hs";
var result = wordCount(sent)
console.log(result);