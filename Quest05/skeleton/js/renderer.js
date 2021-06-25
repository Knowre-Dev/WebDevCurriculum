class Renderer {
  #target;

  constructor(target) {
    this.#target = target;
  }

  render(state) {
    this._render(this.#target, state);
  }

  clear() {
    while (this.#target.firstChild) {
      this.#target.removeChild(this.#target.firstChild);
    }
  }
  _render(target, data) {
    throw "should be overridden";
  }

  get el() {
    return this.#target;
  }
}

/****************************************************************************************/

class ActionsRenderer extends Renderer {
  _render(target, state) {
    this.clear();
    const actions = stringToEl(ActionsRenderer.getTemplate());
    target.appendChild(actions);
  }

  static getTemplate() {
    return `
      <div class="btn-group">
        <button class="btn" id="new-file">새파일</button>
        <button class="btn" id="save-all">저장</button>
      </div>
    `;
  }
}

/****************************************************************************************/

class TabRenderer extends Renderer {
  _render(target, state) {
    const { docs } = state;
    this.clear();
    const tabEls = docs.map((doc) => this.getTabEl(doc, state));
    tabEls.forEach((tabEl) => {
      target.appendChild(tabEl);
    });
  }

  getTabEl(doc, state) {
    const { curr } = state;
    return stringToEl(this.tabTemplate(doc, doc === curr));
  }

  tabTemplate({ name = "", isModified }, isSelected) {
    return `
      <div id="${name}" class="tab ${isSelected ? "tab--selected" : ""}">
        <span class="tab-name">${name}</span>
        <span class="tab-status ${
          isModified ? "" : "tab-status-saved"
        }">●</span>
        <span class="close-btn">×</span>
      </div>
    `;
  }
}

/****************************************************************************************/

class EditorRenderer extends Renderer {
  _render(target, state) {
    const { curr } = state;
    this.clear();
    if (!curr) {
      return;
    }
    const editor = stringToEl(this.editorTemplate(curr));
    target.appendChild(editor);
  }

  editorTemplate(doc) {
    const { text } = doc;
    return `
      <textarea class="editor-input">${text}</textarea>
    `;
  }
}
