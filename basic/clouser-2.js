function makeAdder(x = 0) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(12);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12