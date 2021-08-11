import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './styles/normalize.css';
import { DefaultApolloClient } from '@vue/apollo-composable';

import { apolloClient } from './vue-apollo';

createApp(App).use(store).use(router).provide(DefaultApolloClient, apolloClient).mount('#app');

navigator.serviceWorker.ready.then((swRegistration) => {
  return swRegistration.sync.register('postTweet');
});
