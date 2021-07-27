export class TokenManager {
  static tokenKey = 'accessToken';

  static setToken(token: string): void {
    window.localStorage.setItem(this.tokenKey, `Bearer ${token}`);
  }
  static getToken(): string | null | undefined {
    return window.localStorage.getItem(this.tokenKey);
  }
  static clearToken(): void {
    if (this.getToken()) {
      window.localStorage.removeItem(this.tokenKey);
    }
  }
}
