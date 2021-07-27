import { LOGOUT } from '../api/user';
import { Ctx } from '../index';
import { TokenManager } from '../utils/TokenManager';
import Component from './Component';
import { Notepad } from './Notepad';

export class Actions extends Component {
  props: { notepad: Notepad };

  constructor($target: Element, props: { notepad: Notepad }, ctx: Ctx) {
    super($target, props, ctx);
  }

  template(): string {
    return `
    <div class="btn-group">
        <button class="btn" id="new-file">ADD NEW</button>
        <button class="btn" id="save">SAVE</button>
    </div>
    <button class="btn" id="logout">LOGOUT</button>
    `;
  }

  created(): void {}

  mounted(): void {
    this.$target.querySelector('#new-file').addEventListener('click', async () => {
      await this.props.notepad.add();
    });
    this.$target.querySelector('#save').addEventListener('click', async () => {
      await this.props.notepad.save();
    });
    this.$target.querySelector('#logout').addEventListener('click', async () => {
      await this.client.mutate({
        mutation: LOGOUT,
      });
      TokenManager.clearToken();
      this.router.push('/login');
    });
  }
}
