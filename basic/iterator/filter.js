const numbers = [1,2,3,40,6,70,8,90]

const myFun = (value, index, array) =>{
    return value > 10
}

let value = numbers.filter(myFun) 
console.log('number: ' + numbers)
console.log('with filter: ' + value)  //value > 2

//OBJECT
const student = [
    {id: 21, name:'ane'},
    {id: 22, name:'wwo'},
    {id: 23, name:'rhree'},
    {id: 24, name:'gour'}
]

const idGraterthen22 = student.filter(s => s.id > 22)
//console.log(idGraterthen22)

const names = idGraterthen22.map(s => s.name);

console.log(names); // ["rhree", "gour"]