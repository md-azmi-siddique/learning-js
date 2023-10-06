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
      return this.salary
    },
  };

  const student2 = {
    id: 1264644,
    phone: 36545644,
    firstName: "rohim",
    lastName: "hasan",
    salary: 2500,
  };


  //CALL
  student1.bill.call(student2, [1000]); //pass the parameter  into an array
  console.log(student2.salary)
  console.log(student1.salary)
  // document.getElementById("demo").innerHTML = student2.salary