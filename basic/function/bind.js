const student1 = {
  id: 121,
  phone: 1745,
  firstName: "abir",
  lastName: "hasan",
  salary: 200,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  bill: function (amount) {
    console.log(this); // Logs the context, should be student2
    this.salary = this.salary - amount;
    return this.salary;
  },
};

const student2 = {
  id: 1264644,
  phone: 36545644,
  firstName: "rohim",
  lastName: "hasan",
  salary: 2500,
};

//BIND
const student2Bill = student1.bill.bind(student2);
student2Bill(100)
student2Bill(400)
console.log(student2.salary);
// document.getElementById("demo").innerHTML = student2.salary

const fullNameStudent2 = student1.fullName.bind(student2)
console.log(fullNameStudent2())
