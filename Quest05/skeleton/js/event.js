class Event {
  #ctx;
  type;
  selector;
  action;
  constructor(ctx, type, selector, action) {
    this.#ctx = ctx;
    this.type = type;
    this.selector = selector;
    this.action = action.bind(this.#ctx);
  }
}
