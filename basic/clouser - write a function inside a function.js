function add() {
    let counter = 0;
    return function() {
        counter++;
      return counter;
    }
  }

  const result = add()
  console.log(result())
  console.log(result())
  console.log(result())

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
