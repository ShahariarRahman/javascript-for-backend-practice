module.exports.errorHandler = function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(message);
};

module.exports.two = function two() {
  console.log("two");
};
