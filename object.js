var student = {id:121, phone:1745, name:"abir"}
console.log(student)

//accessing a element 
//option 1
var phone = student.phone;
console.log(phone)

//option 2
var phone = student["phone"];
console.log(phone)

//option 3
var phoneNo = "phone"
var phone = student[phoneNo]
console.log(phone)

//updating propery of a object
//use the same process as accessing the property
student.phone = 2222
console.log(student)

//adding a new property of a onject
//use the same process as accessing the property
student.mark = 100
console.log(student)