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
        <button class="btn" id="new-file" data-testId="new-button">ADD NEW</button>
        <button class="btn" id="save" data-testId="save-button">SAVE</button>
    </div>
    <button class="btn" id="logout" data-testId="logout-button">LOGOUT</button>
    `;
  }

  async created(): Promise<void> {}

  async mounted(): Promise<void> {
    const { notepad } = this.props;
    this.$target.querySelector('#new-file').addEventListener('click', async () => {
      const name = prompt('파일명을 입력하세요');
      if (!notepad.validateName(name)) {
        return alert('이미 존재하는 파일명 입니다.');
      }
      if (!name) {
        return;
      }
      await notepad.add(name);
    });
    this.$target.querySelector('#save').addEventListener('click', async () => {
      await notepad.save(notepad.state.curr);
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
