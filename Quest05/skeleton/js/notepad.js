class Notepad {
  #controller;
  #loader;

  constructor() {
    this.#controller = new Controller();
  }

  load() {
    const docs = this.#loader.load();
    this.#controller.setDocs(docs);
  }

  save() {
    this.#controller.save();
  }

  open(doc) {
    this.#controller.open(doc);
  }

  close(doc) {
    this.#controller.close(doc);
  }

  add() {
    this.#controller.add();
  }

  setLoader(loader, _ = type(loader, Loader)) {
    this.#loader = loader;
    this.#controller.setLoader(loader)
  }
}
