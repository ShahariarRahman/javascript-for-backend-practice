const { errorHandler } = require("./errorHandler.js");

const getData = async () => {
  try {
    const emailError = new Error("Email already exist!");
    throw emailError;
  } catch (error) {
    errorHandler(error);
  }
};

getData();

console.log("Done!");
