const student = {
    id: 121, 
    phone: 1745, 
    firstName: "abir",
    lastName: 'hasan',
    billMoney: 200,
    phone: 25852,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    bill: function(amount){
        return this.billMoney - amount;
    }
};

console.log(student);

console.log(`**********************`);

const {id} = student;
const {fullName} = student;
const {bill} = student

console.log(id); // Output: 121
console.log(student.fullName()); // Output: abir hasan
console.log(student.bill(50)); // Output: abir hasan

// //accessing a element 
// //option 1
// var phone = student.phone;
// console.log(phone)

// //option 2
// var phone = student["phone"];
// console.log(phone)

// //option 3
// var phoneNo = "phone"
// var phone = student[phoneNo]
// console.log(phone)

// //updating property of a object
// //use the same process as accessing the property
// student.phone = 2222
// console.log(student)

// //adding a new property of a object
// //use the same process as accessing the property
// student.mark = 100
// console.log(student)
