import { TokenManager } from '../utils/token.js';

export const request = async (query, payload = null, options = {}) => {
  try {
    const token = TokenManager.getToken();
    const base = 'https://localhost:8000/graphql';
    const fetchOptions = {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        query: query,
        variables: payload,
      }),
      ...options,
    };
    Object.assign(fetchOptions.headers, {
      Authorization: token,
    });
    const res = await fetch(base, fetchOptions);
    if (!res.ok) {
      throw new Error('request failed');
    }
    if (res.status === 401) {
      TokenManager.clearToken();
      document.location.href = '/login';
    }

    const json = await res.json();
    if ('errors' in json) {
      json.errors.forEach(error => {
        const extensions = Reflect.get(error, 'extensions');
        if (extensions && extensions.code === 'UNAUTHENTICATED') {
          TokenManager.clearToken();
          document.location.href = '/login';
        }
      });
    }

    return json;
  } catch (e) {
    console.error(e);
  }
};
