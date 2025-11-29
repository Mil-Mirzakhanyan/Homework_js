Function.prototype.myApply = function (context, argsArray) {
  
  context = (context === null || context === undefined) ? globalThis : Object(context);

  
  if (argsArray !== null && argsArray !== undefined && !Array.isArray(argsArray)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  const fnSymbol = Symbol();

  context[fnSymbol] = this;

  const result = argsArray ? context[fnSymbol](...argsArray) : context[fnSymbol]();

  delete context[fnSymbol];

  return result;
};