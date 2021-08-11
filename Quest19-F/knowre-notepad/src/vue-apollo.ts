import router from '@/router';
import { TokenManager } from '@/utils/TokenManager';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'https://localhost:8000/graphql',
});

const apolloClient = new ApolloClient({
  cache,
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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((gError) => {
      const { extensions } = gError;
      if (extensions!.code === 'UNAUTHENTICATED') {
        router.push('/login');
      }
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

apolloClient.setLink(from([authLink, errorLink, httpLink]));

export { apolloClient };
