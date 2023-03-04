const myPromise = new Promise((resolve, reject) => {
  const user = { id: 1 };
  if (!user) {
    reject("Something went wrong!");
  } else {
    setTimeout(() => {
      resolve({ name: "John" });
    }, 1000);
  }
});

const userIds = [1, 2, 3, 4, 5];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
  userData.push(myPromise);
}

Promise.all(userData).then((res) => {
  console.log(res);
});

myPromise
  .then((res) => console.log("found in then:", res))
  .catch((err) => console.log("found in error:", err));
