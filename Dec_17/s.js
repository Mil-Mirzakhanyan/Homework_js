class Money {
  constructor(amount) {
    this.amount = amount;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `${this.amount} USD`;
    }

    return this.amount;
  }
}