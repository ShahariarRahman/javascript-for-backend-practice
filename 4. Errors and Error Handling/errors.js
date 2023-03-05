const getData = async () => {
  try {
    undefined.find();
  } catch (error) {
    errorHandler(error);
  }
};

getData();

function errorHandler(error) {
  console.log(error);
}

console.log("Done!");
