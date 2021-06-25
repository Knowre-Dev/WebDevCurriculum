class Manager {
  #events;
  #renderer;

  constructor(renderer, events) {
    this.#renderer = renderer;
    this.#events = events;
  }

  bindEvents(target) {
    this.#events.length &&
      this.#events.forEach((event) => {
        if (event.hasOwnProperty("selector")) {
          const els = target.querySelectorAll(event.selector);
          els.forEach((el) => {
            el.addEventListener(event.type, event.action);
          });
        } else {
          target.addEventListener(event.name, event.action);
        }
      });
  }

  render(state) {
    this.#renderer.render(state);
    const target = this.#renderer.el;
    this.bindEvents(target);
  }
}
