import { Ctx } from '../index';
import { Doc } from '../model/doc/doc.model';
import Component from './Component';
import { Notepad } from './Notepad';

export class Tab extends Component {
  props: { notepad: Notepad; doc: Doc };
  constructor($target: Element, props: { notepad: Notepad; doc: Doc }, ctx: Ctx) {
    super($target, props, ctx);
  }
  template(): string {
    const { doc, notepad } = this.props;
    const { isModified, name } = doc;
    const { curr } = notepad.state;

    return `
      <div class="tab ${doc === curr ? 'tab--selected' : ''}">
        <span class="tab-name">${name}</span>
        <span class="tab-status ${isModified ? '' : 'tab-status-saved'}">●</span>
        <span class="close-btn">×</span>
      </div>
    `;
  }

  created(): void {}

  mounted(): void {
    const { doc, notepad } = this.props;
    const { curr } = notepad.state;

    const tabEl = this.$target.querySelector('.tab');
    const closeEl = this.$target.querySelector('.close-btn');

    tabEl.addEventListener('click', () => {
      notepad.open(doc);
    });
    tabEl.addEventListener('dblclick', () => {
      const newName = prompt('파일명을 입력하세요', doc.name);
      if (!this.validateName(notepad.state.docs, newName)) {
        return alert('이미 존재하는 파일명 입니다.');
      }
      curr.name = newName;
      notepad.tabs.render();
    });
    closeEl.addEventListener('click', e => {
      e.stopPropagation();
      notepad.close(doc);
    });
  }

  validateName(docs: Doc[], name: string): boolean {
    return !docs.map(doc => doc.name).includes(name);
  }
}
