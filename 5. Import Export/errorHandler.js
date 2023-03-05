export function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(message);
}

export function two() {
  console.log("two");
}
