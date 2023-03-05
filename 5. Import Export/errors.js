const getData = async () => {
  try {
    const emailError = new Error("Email already exist!");
    throw emailError;
  } catch (error) {
    errorHandler(error);
  }
};

getData();

function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(message);
}

console.log("Done!");
