// basic class structure
// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//     }

// }

// const Student1 = new Student(1, 'no');
// const Student2 = new Student(2, 'tes');
// console.log(Student1, Student2)

class Parent{
    constructor(){
        this.fatherName = 'arnold';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby1 = new Child('shelby')
const baby2 = new Child('Arther')
console.log(baby1)
console.log(baby2)