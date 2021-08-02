import { getByTestId } from '@testing-library/dom';
import { Ctx } from '../../src';
import Login from '../../src/components/Login';

describe('Login class', () => {
  it('should be able to call new() on Login', async () => {
    const el = document.createElement('div');
    const instance = await Login.create(el, {}, {} as Ctx);
    expect(instance).toBeTruthy();
  });
});

describe('Login', () => {
  let el: HTMLElement;
  let container: Login;
  let form: HTMLFormElement;
  let usernameInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let loginButton: HTMLButtonElement;
  beforeEach(async () => {
    jest.restoreAllMocks();
    el = document.createElement('div');
    container = await Login.create<Login>(el, {}, {} as Ctx);
    form = getByTestId(el, 'login-form') as HTMLFormElement;
    usernameInput = getByTestId(el, 'username') as HTMLInputElement;
    passwordInput = getByTestId(el, 'password') as HTMLInputElement;
    loginButton = getByTestId(el, 'login-button') as HTMLButtonElement;
  });

  it('login method 실행, username, password 입력시', async () => {
    container.login = jest.fn().mockReturnValue({});
    const loginSpy = jest.spyOn(container, 'login');

    usernameInput.setAttribute('value', 'guest1');
    passwordInput.setAttribute('value', 'guest1');
    form.dispatchEvent(new Event('submit'));

    expect(loginSpy).toBeCalled();
  });

  it('alert 발생, username, password 미 입력시', async () => {
    window.alert = jest.fn();

    usernameInput.setAttribute('value', '');
    passwordInput.setAttribute('value', '');
    form.dispatchEvent(new Event('submit'));

    expect(window.alert).toBeCalled();
  });
});
