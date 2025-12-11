const p = new MyPromise((resolve, reject) => {
  reject("Something went wrong!");
});

p.catch(err => {
  console.log("Caught error:", err);
});

