var author = document.getElementsByClassName("author");
//console.log(author)
for(var i = 0; i < author.length; i++)
{
    var element = author[i];
    console.log(element)
    console.log(element.innerHTML)
    element.innerHTML = 'lol-' + (i+1)
}

document.querySelector
document.querySelectorAll