const getData = async () => {
  try {
    // undefined.find();
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
  /*
  logger.error({
    name,
    message,
    stack,
    route: req.route,
  });
  
  console.log("Internal server error!");
 */
}

console.log("Done!");
