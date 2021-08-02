import { LOGIN } from '../api/user';
import { ResultType } from '../model';
import { LoginInput } from '../model/user/user.model';
import { isResLogin, LoginVars, TokenData } from '../model/user/user.type';
import { TokenManager } from '../utils/TokenManager';
import Component from './Component';

export default class Login extends Component {
  template(): string {
    return `
      <div class="login-page">
        <div class="form">
          <form class="login-form" onsubmit="return false" data-testid="login-form">
            <input type="text" placeholder="userName" id="userName" data-testid="username" data-cy="username-input"/>
            <input type="password" placeholder="password" id="password" data-testid="password" data-cy="password-input"/>
            <button data-testid="login-button">login</button>
            <p>guest1~3/guest1~3</p>
          </form>
        </div>
      </div>
    `;
  }

  async created(): Promise<void> {}

  async mounted(): Promise<void> {
    const form = this.$target.querySelector('.login-form');
    form.addEventListener('submit', async e => {
      try {
        const target = e.target as Element;
        const [userName, password] = [...target.querySelectorAll('input')].map(el => el.value);
        if (!userName || !password) {
          return alert('id/pw 입력해');
        }
        const login = await this.login({ userName, password });
        if (login.accessToken) {
          TokenManager.setToken(login.accessToken);
          this.router.push('/');
        }
      } catch (e) {
        alert(e.message);
      }
    });
  }
  async login(payload: LoginInput): Promise<TokenData> {
    const res = await this.client.mutate<ResultType<'login', TokenData>, LoginVars>({
      mutation: LOGIN,
      variables: { loginInput: payload },
    });
    const { data } = res;
    if (isResLogin(Reflect.get(data, 'login'))) {
      return Reflect.get(data, 'login');
    }
    throw 'no property';
  }
}
