const numbers = [1,2,3,4,6,7,8,9]

const myFun = (value, index, array) =>{
    return value * 2
}

let value = numbers.map(myFun) 
console.log('number: ' + numbers)
console.log('with map : ' + value)  //value * 2

const student = [
    {id: 21, name:'ane'},
    {id: 22, name:'wwo'},
    {id: 23, name:'rhree'},
    {id: 24, name:'gour'}
]
// NORMAL WAY
// const newArray = [];

// for (let index = 0; index < student.length; index++) {
//     const element = student[index];
//     //console.log(element)
//     newArray.push(element.name)
// }
// console.log(newArray)

const names = student.map(s => s.name)
console.log(names)

const ids = student.map(s => s.id)
console.log(ids);

