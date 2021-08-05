<template>
  <button class="button" data-testid="login-button" :style="style"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: ['padding', 'margin'],
  setup(props) {
    return {
      style: {
        padding: props.padding || '15px',
        margin: props.margin || 0,
      },
    };
  },
});
</script>

<style scoped lang="scss">
.button {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  //padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}
</style>
