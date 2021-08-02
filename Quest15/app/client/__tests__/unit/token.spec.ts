import { TokenManager } from '../../src/utils/TokenManager';

describe('TokenManager', () => {
  const tokenKey = 'accessToken';
  const tokenValue = 'tokentoken';

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('토큰을 로컬스토리지에 Bearer + 토큰 형태로 저장한다.', () => {
    const localStorageSetItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

    TokenManager.setToken(tokenValue);

    expect(localStorageSetItemSpy).toBeCalled();
    expect(window.localStorage.getItem(tokenKey)).toBe(`Bearer ${tokenValue}`);
  });

  test('로컬스토리지에서 토큰을 가져온다', () => {
    const localStorageGetItemSpy = jest.spyOn(window.localStorage.__proto__, 'getItem');

    const token = TokenManager.getToken();

    expect(localStorageGetItemSpy).toBeCalled();
    expect(token).toBe(`Bearer ${tokenValue}`);
  });

  test('로컬스토리지의 토큰을 clear', () => {
    const localStorageRemoveItemSpy = jest.spyOn(window.localStorage.__proto__, 'removeItem');

    TokenManager.clearToken();

    const token = TokenManager.getToken();

    expect(localStorageRemoveItemSpy).toBeCalled();
    expect(token).toBeNull();
  });
});
