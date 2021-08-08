import Login from '@/components/Login.vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';

describe('Login Component', () => {
  let wrapper: VueWrapper<any>;
  let usernameInput: DOMWrapper<HTMLInputElement>;
  let passwordInput: DOMWrapper<HTMLInputElement>;
  let loginButton: DOMWrapper<HTMLButtonElement>;

  beforeEach(() => {
    wrapper = mount(Login, {});
    usernameInput = wrapper.find('[data-testid="username"]');
    passwordInput = wrapper.find('[data-testid="password"]');
    loginButton = wrapper.find('[data-testid="login-button"]');
    window.alert = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render', () => {
    expect(wrapper.findAll('input')).toHaveLength(2);
  });

  it('비밀번호 인풋에서 엔터 입력시 login method call', async () => {
    const loginSpy = jest.spyOn(wrapper.vm, 'login');

    await wrapper.vm.$forceUpdate();
    await passwordInput.trigger('keypress', { key: 'enter' });

    expect(window.alert).toBeCalled();
    expect(loginSpy).toHaveBeenCalled();
  });

  it('로그인 버튼 클릭시 login method call', async () => {
    const loginSpy = jest.spyOn(wrapper.vm, 'login');
    // TODO: 대체 방법 찾기
    await wrapper.vm.$forceUpdate();

    await usernameInput.setValue('guest1');
    await passwordInput.setValue('guest1');
    await loginButton.trigger('click');

    expect(loginSpy).toHaveBeenCalled();
  });

  it('Id/PW 미입력시 alert', async () => {
    const loginSpy = jest.spyOn(wrapper.vm, 'login');
    // TODO: 대체 방법 찾기
    await wrapper.vm.$forceUpdate();

    await usernameInput.setValue('');
    await passwordInput.setValue('');
    await loginButton.trigger('click');

    expect(loginSpy).toBeCalled();
    expect(window.alert).toBeCalled();
  });
});
