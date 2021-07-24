import { AuthApi } from '../api/auth.js';
import { TokenManager } from '../utils/token.js';
import Component from './Component.js';

export default class Login extends Component {
  template() {
    return `
      <div class="form">
      <form class="login-form" onsubmit="return false">
        <input type="text" placeholder="userName" id="userName"/>
        <input type="password" placeholder="password" id="password"/>
        <button>login</button>
        <p>guest1~3/guest1~3</p>
      </form>
    </div>
    `;
  }
  setEvent() {
    const form = document.querySelector('.login-form');
    form.addEventListener('submit', async e => {
      const [userName, password] = [...e.target.querySelectorAll('input')].map(el => el.value);
      if (!userName || !password) {
        return alert('id/pw 입력해');
      }
      const data = await this.login({ userName, password });
      if ('accessToken' in data) {
        TokenManager.setToken(data['accessToken']);
        window.location.href = '/';
      }
    });
  }

  async login(payload) {
    const res = await AuthApi.login(payload);
    return res.data?.login;
  }
}
