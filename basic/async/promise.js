const status = true;

console.log("task 1");

//promise definition
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("task 2");
    } else {
      reject("failed");
    }
  }, 2000);
});

//promise call
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("task 3");
