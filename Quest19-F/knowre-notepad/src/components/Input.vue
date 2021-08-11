<template>
  <input
    class="input"
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: String,
    placeholder: String,
    type: String,
  },
  emits: ['update:modelValue'],
});
</script>

<style scoped lang="scss">
.input {
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 1rem;
}
</style>
