const payment = true;
const mark = 90;

const enroll = () => {
  console.log("enroll on process");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (payment == true) {
        resolve();
      } else {
        reject("task failed");
      }
    }, 5000);
  });

  return promise;
};

const paymentProcess = () => {
  console.log("continue the course");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark > 80) {
        resolve();
      } else {
        reject("no result");
      }
    }, 15000);
  });
  return promise;
};

const getCertificate = () => {
  console.log("you finish the course successfully");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("obtain the certificate");
    }, 1000);
  });

  return promise;
};

async function process() {
  try {
    await enroll();
    await paymentProcess();
    const reply = await getCertificate();
    console.log(reply);
  } catch (error) {
    console.log(error);
  }
}

process();
