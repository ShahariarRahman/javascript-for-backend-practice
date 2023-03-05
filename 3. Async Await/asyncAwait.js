// promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success!");
  }, 1000);
});

// Consume data by async await instant of callback
const getData = async () => {
  const res = await promise;
  console.log(res);
};

getData();

//  consume data by callback:
fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data));

//  consume data by async await:
const getUser = async () => {
  const res = await fetch("");
  const user = await res.json();
  const res2 = await fetch(`https://www.example.com/${user.id}`);
  const products = await res2.json();
  console.log(products);
};

getUser();
