then(onFulfilled, onRejected) {
  const asyncCall = fn => queueMicrotask ? queueMicrotask(fn) : setTimeout(fn, 0);

  const promise2 = new MyPromise((resolve, reject) => {
    const fulfilledTask = () => {
      try {
        const x = onFulfilled ? onFulfilled(this.value) : this.value;
        resolvePromise(promise2, x, resolve, reject);
      } catch (err) {
        reject(err);
            }
            };
  

    const rejectedTask = () => {
      try {
        const x = onRejected ? onRejected(this.reason) : (() => { throw this.reason })();
        resolvePromise(promise2, x, resolve, reject);
      } catch (err) {
        reject(err);
      }
    };

    if (this.state === "fulfilled") {
      asyncCall(fulfilledTask);
    } else if (this.state === "rejected") {
      asyncCall(rejectedTask);
    } else if (this.state === "pending") {
      this.onFulfilledCallbacks.push(fulfilledTask);
      this.onRejectedCallbacks.push(rejectedTask);
    }
  });

  return promise2;
}