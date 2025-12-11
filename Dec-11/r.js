function resolvePromise(promise2, x, resolve, reject) {

  if (promise2 === x) {
    return reject(new TypeError("Cannot resolve promise with itself"));
  }

  if (x instanceof MyPromise) {
    if (x.state === "fulfilled") {
      return resolve(x.value);
    } else if (x.state === "rejected") {
      return reject(x.reason);
    } else {
      
      x.then(
        y => resolvePromise(promise2, y, resolve, reject),
        r => reject(r)
      );
    }
    return;
  }

  if ((x !== null) && (typeof x === "object" || typeof x === "function")) {
    let then;
    let called = false; 

    try {
      then = x.then;
    } catch (err) {
      return reject(err);
    }

    if (typeof then === "function") {
      try {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (err) {
        if (!called) {
          called = true;
          reject(err);
        }
      }
    } else {
    
      resolve(x);
    }
  } else {

    resolve(x);
  }
}