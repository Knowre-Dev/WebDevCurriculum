import { InMemoryCache } from '@apollo/client/cache';
import { ApolloClient, from, HttpLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { Router } from './utils/router';
import { TokenManager } from './utils/TokenManager';
import './styles/login.css';
import './styles/normalize.css';
import './styles/style.css';

const cache = new InMemoryCache();

export const httpLink = new HttpLink({
  uri: 'https://localhost:8000/graphql',
});

const client = new ApolloClient({
  cache: cache,
});

export interface Ctx {
  client: ApolloClient<unknown>;
  router: Router;
}

const router = new Router(document.querySelector('#app'), {
  client: client,
});

const authLink = setContext((_, ctx) => {
  const { headers } = ctx;
  const token = TokenManager.getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(gError => {
      const { extensions } = gError;
      if (extensions.code === 'UNAUTHENTICATED') {
        router.push('/login');
      }
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

client.setLink(from([authLink, errorLink, httpLink]));

router.init();
