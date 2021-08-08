<template>
  <div class="login-container">
    <div class="login-form" data-testid="login-form">
      <Input placeholder="userName" data-testid="username" v-model="userName" />
      <Input
        type="password"
        placeholder="password"
        data-testid="password"
        @keypress.enter="() => loginUser(userName, password)"
        v-model="password"
      />
      <Button data-testid="login-button" @click="loginUser(userName, password)"> LOGIN </Button>
      <p>guest1~3/guest1~3</p>
    </div>
  </div>
</template>
<script lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import useUser from '@/composable/useUser';
import { User } from '@/types';
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Login',
  components: { Input, Button },
  setup() {
    const state = reactive({
      userName: '',
      password: '',
    });

    const { login } = useUser();

    const loginUser = async (userName: User['userName'], password: string) => {
      await login(userName, password);
    };

    return {
      ...toRefs(state),
      loginUser,
    };
  },
});
</script>
<style lang="scss">
.login-container {
  width: 360px;
  height: 260px;
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
}
</style>
