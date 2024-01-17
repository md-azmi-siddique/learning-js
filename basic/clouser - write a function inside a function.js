function add() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    }
  }

  const result1 = add()
  console.log(result1())
  console.log(result1())
  console.log(result1())

  const result2 = add()
  console.log(result2())
  console.log(result2())

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// console.log(add());
