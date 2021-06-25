class DocData {
  #name = "";
  #originText = "";
  #text = "";

  constructor({ name, text = "" }) {
    this.#name = name;
    this.#originText = text;
    this.#text = text;
  }

  save() {
    this.originText = this.text;
  }

  get isModified() {
    return this.#text !== this.#originText;
  }

  get name() {
    return this.#name;
  }

  get text() {
    return this.#text;
  }

  set name(name) {
    this.#name = name;
  }

  set text(text) {
    this.#text = text;
  }

  set originText(text) {
    this.#originText = text;
  }

  getParsed() {
    return {
      name: this.#name,
      text: this.#text,
    };
  }
}
