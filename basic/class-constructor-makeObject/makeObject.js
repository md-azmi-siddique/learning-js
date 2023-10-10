class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;

    // Add a function inside the constructor
    this.addTwoNumbers = function (a, b) {
      return a + b;
    };
  }
} 

const person1 = new Person("jsmal", "ussid", 200);
//person1.salary = person1.addTwoNumbers(person1.salary, 1000);

const person2 = new Person("moin", "sua", 20);
console.log(person1);
console.log(person2);
