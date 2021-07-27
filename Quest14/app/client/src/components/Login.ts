import { LOGIN } from '../api/user';
import { ResultType } from '../model';
import { LoginInput } from '../model/user/user.model';
import { isResLogin, LoginVars, TokenData } from '../model/user/user.type';
import { TokenManager } from '../utils/TokenManager';
import Component from './Component';

export class Login extends Component {
  template(): string {
    return `
      <div class="login-page">
        <div class="form">
          <form class="login-form" onsubmit="return false">
            <input type="text" placeholder="userName" id="userName"/>
            <input type="password" placeholder="password" id="password"/>
            <button>login</button>
            <p>guest1~3/guest1~3</p>
          </form>
        </div>
      </div>
    `;
  }

  created(): void {}

  async mounted(): Promise<void> {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', async e => {
      const target = e.target as Element;
      const [userName, password] = [...target.querySelectorAll('input')].map(el => el.value);
      if (!userName || !password) {
        return alert('id/pw 입력해');
      }
      const login = await this.login({ userName, password });
      TokenManager.setToken(login.accessToken);
      this.router.push('/');
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
