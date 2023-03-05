function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(message);
}

module.exports = errorHandler;
