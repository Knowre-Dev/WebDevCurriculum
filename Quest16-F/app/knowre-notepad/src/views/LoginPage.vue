<template>
  <div class="login-page">
    <Login />
  </div>
</template>

<script lang="ts">
import Login from '@/components/Login.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  components: { Login },
});
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #76b852;
}
</style>
