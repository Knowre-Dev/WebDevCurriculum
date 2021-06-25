class Controller {
  #state = {
    docs: [],
    curr: null,
  };
  #managers = [];
  #loader;

  constructor() {
    this.#managers = {
      actions: new Manager(new ActionsRenderer(qs(".actions")), [
        new Event(this, "click", "#new-file", this.add),
        new Event(this, "click", "#save-all", (e) => {
          this.save();
        }),
      ]),
      tabs: new Manager(new TabRenderer(qs(".tabs")), [
        new Event(this, "click", ".tab", (e) => {
          e.preventDefault();
          const { id } = e.currentTarget;
          this.open(this.find(id));
        }),
        new Event(this, "dblclick", ".tab", (e) => {
          this.changeFileName(
            this.curr,
            prompt("파일명을 입력하세요", this.curr.name)
          );
        }),
        new Event(this, "click", ".close-btn", (e) => {
          e.stopPropagation();
          const { id } = e.currentTarget.parentNode;
          this.close(this.find(id));
        }),
      ]),
      editor: new Manager(new EditorRenderer(qs(".editor")), [
        new Event(this, "input", ".editor-input", (e) => {
          e.stopPropagation();
          this.setText(e.target.value);
        }),
      ]),
    };
  }

  setDocs(docs, i = 0) {
    this.#state.docs = docs.map((doc) => new DocData(doc));
    this.curr = this.#state.docs[i];
    this.render();
  }

  add() {
    const name = prompt("파일명을 입력하세요");
    if (!this.validateName(name)) {
      return alert("이미 존재하는 파일명 입니다.");
    }
    const newDoc = new DocData({ name });
    this.#state.docs.push(newDoc);
    this.open(newDoc);
    this.render();
  }

  open(doc) {
    this.curr = doc;
  }

  save() {
    const currIndex = this.#state.docs.findIndex(doc => this.curr === doc);
    this.#loader.save(this.docs)
    this.setDocs(this.docs, currIndex);
  }

  close(doc) {
    this.#state.docs = this.#state.docs.filter((d) => d !== doc);
    const length = this.#state.docs.length;
    if (length >= 1) {
      this.open(this.#state.docs[length - 1]);
    } else {
      this.curr = null;
    }
    this.render();
  }

  find(name) {
    const doc = this.#state.docs.find((doc) => doc.name === name);
    if (!doc) {
      throw "no doc";
    }
    return doc;
  }

  render() {
    const arrayOfManagers = Object.values(this.#managers);
    arrayOfManagers.forEach((manager) => {
      manager.render(this.#state);
    });
  }

  changeFileName(doc, newName) {
    if (!newName) {
      return;
    }
    if (!this.validateName(newName)) {
      return alert("이미 존재하는 파일명 입니다.");
    }
    doc.name = newName;
    this.render();
  }

  validateName(name) {
    return !this.docs.map((doc) => doc.name).includes(name);
  }

  get curr() {
    return this.#state.curr;
  }

  set curr(doc) {
    this.#state.curr = doc;
    this.render();
  }

  setText(text) {
    this.#state.curr.text = text;
    this.#managers.tabs.render(this.#state);
  }

  get docs() {
    return this.#state.docs.map((doc) => doc.getParsed());
  }
  setLoader(loader, _ = type(loader, Loader)) {
    this.#loader = loader;
  }
}
