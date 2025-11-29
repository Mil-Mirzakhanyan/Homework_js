Function.prototype.myBind = function (context, ...bindArgs) {
  if (typeof this !== "function") {
    throw new TypeError("Bind must be called on a function");
  }

  const originalFn = this;

  function boundFunction(...callArgs) {

    const isNew = this instanceof boundFunction;
    return originalFn.apply(isNew ? this : context, [...bindArgs, ...callArgs]);
  }

 
  function Empty() {}
  Empty.prototype = originalFn.prototype;
  boundFunction.prototype = new Empty();

  return boundFunction;
};