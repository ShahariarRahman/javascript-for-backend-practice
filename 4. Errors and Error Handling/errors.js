const getData = async () => {
  try {
    undefined.find();
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
