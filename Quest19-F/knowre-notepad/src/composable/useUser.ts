import router from '@/router';
import { User } from '@/types';
import { TokenManager } from '@/utils/TokenManager';
import { apolloClient } from '@/vue-apollo';
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { reactive, ref, Ref, toRefs, unref } from 'vue';

provideApolloClient(apolloClient);

type State = {
  user: User | null;
  loginLoading: Ref<boolean>;
  loginError: boolean;
  userLoading: Ref<boolean>;
  userError: boolean;
};

const initState: State = {
  user: null,
  loginLoading: ref(false),
  loginError: false,
  userLoading: ref(false),
  userError: false,
};

export default function useUser() {
  const state = reactive(initState);

  async function login(userName: User['userName'], password: string) {
    if (!userName || !password) {
      alert('ID/PW 확인하세요');
      return;
    }

    const { mutate: login, loading } = useMutation(gql`
      mutation ($loginInput: LoginInput!) {
        login(input: $loginInput) {
          accessToken
        }
      }
    `);
    const res = await login({ loginInput: { userName, password } });
    const token = res?.data?.login?.accessToken || null;

    if (token) {
      TokenManager.setToken(token);
      await router.push('/');
      getUser();
    }
    state.loginLoading = unref(loading);
  }

  const getUser = () => {
    const { onResult } = useQuery(gql`
      query {
        user {
          id
          userName
          nickName
        }
      }
    `);

    onResult((result) => {
      state.user = result.data.user;
      state.userLoading = result.loading;
    });
  };

  const logout = async () => {
    const { mutate: logout } = useMutation(gql`
      mutation {
        result: logout
      }
    `);

    await logout();
    TokenManager.clearToken();
    await router.push('/login');
  };

  return {
    ...toRefs(state),
    login,
    logout,
    getUser,
  };
}
