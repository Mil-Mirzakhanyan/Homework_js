Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Call must be called on a function");
  }

  context = (context === null || context === undefined)
    ? globalThis
    : Object(context);

  const fnSymbol = Symbol();

  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);


  delete context[fnSymbol];

  return result;
};