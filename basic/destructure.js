//EXAMPLE 1
const person = {
    name: 'ho',
    age: 4,
    job: 'line',
    address: 'katabon',
    phone: '01473541563465'
}

const {phone} = person; 
console.log(phone)    

//EXAMPLE 2
const person2 = {
    name: 'av',
    salary:{
        taka: '500',
        dollar: '$10'
    }
}

const {dollar} = person2.salary
console.log(dollar)


//EXAMPLE 3 - DESTRUCTURE OF AN ARRAY
const person3 = ['A', 'B', 'C','D','E']

const [one, ...others] = person3;
console.log(one)
console.log(others)
