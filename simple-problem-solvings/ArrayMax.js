var student = [1,2,3,4,5,6,7,8,9,0,12]
var mark = student[0];
for(i = 0; i < student.length; i++)
{
    var element = student[i];
    if(element > mark){
        mark = element;
    }
}

console.log(mark); 