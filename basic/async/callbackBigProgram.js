const payment = true;
const mark = 90;

const enroll = (paymentProcess) => {
  console.log("enrollment on process");
  setTimeout(function () {
    if (payment == true) {
      paymentProcess();
    } else {
      console.log("you have not added your bank details");
    }
  }, 5000);
};

const paymentProcess = (getCertificate) => {
  console.log("continue the course");

  setTimeout(function () {
    if (mark > 80) {
      getCertificate(); 
    } else {
      console.log("no result");
    }
  }, 15000);
};

const getCertificate = () => {
  console.log("you finish the course successfully");
};

enroll(function () {
  paymentProcess(getCertificate);
});
