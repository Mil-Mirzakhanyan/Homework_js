class Collection {
  constructor(items = []) {
    this.items = items;
  }

  add(item) {
    this.items.push(item);
  }

  get [Symbol.toStringTag]() {
    return "Collection";
  }
}