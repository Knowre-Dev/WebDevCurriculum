import { Ctx } from '../index';
import Component from './Component';
import { Notepad } from './Notepad';

interface State {
  text: string;
}

export class Editor extends Component {
  props: { notepad: Notepad };
  state: State;

  constructor($target: Element, props: { notepad: Notepad }, ctx: Ctx) {
    super($target, props, ctx);
  }

  template(): string {
    const { notepad } = this.props;
    const { curr } = notepad.state;
    return `<textarea class="editor-input" ${!curr ? 'readonly' : ''} data-testId="editor-input">${
      this.state.text
    }</textarea>`;
  }

  async created(): Promise<void> {
    const { notepad } = this.props;
    const { curr } = notepad.state;

    this.setState({
      text: curr?.text ?? '',
    });
  }

  async mounted(): Promise<void> {
    const { notepad } = this.props;
    const { curr } = notepad.state;
    this.$target.querySelector('.editor-input').addEventListener('input', e => {
      const target = e.target as HTMLInputElement;
      curr.text = target.value;
      notepad.tabs.render();
    });
  }
  setState(newState: Partial<State>): void {
    this.state = { ...this.state, ...newState };
  }
}
