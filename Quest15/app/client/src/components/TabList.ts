import { Ctx } from '../index';
import Component from './Component';
import { Notepad } from './Notepad';
import { Tab } from './Tab';

export class TabList extends Component {
  props: { notepad: Notepad };

  constructor($target: Element, props: { notepad: Notepad }, ctx: Ctx) {
    super($target, props, ctx);
  }

  template(): string {
    return `
      <div class="tabs" data-component="tab-list"></div>
    `;
  }

  async created(): Promise<void> {}

  async mounted(): Promise<void> {
    const $tabList = this.$target.querySelector('[data-component="tab-list"]');
    const notepad = this.props.notepad;
    const { docs } = notepad.state;
    for (const doc of docs) {
      const tab = document.createElement('div');
      $tabList.appendChild(tab);
      await Tab.create(tab, { doc, notepad }, this.ctx);
    }
  }
}
