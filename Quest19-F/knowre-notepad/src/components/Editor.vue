<template>
  <textarea
    class="editor-input"
    :value="doc.text || ''"
    @input="$emit('update:doc', $event.target.value)"
  ></textarea>
</template>

<script lang="ts">
import { DocModel } from '@/types/DocModel';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Editor',
  props: {
    doc: Object as PropType<DocModel>,
  },
});
</script>

<style scoped lang="scss">
.editor-input {
  width: 100%;
  padding: 1rem;
  line-height: 2rem;
  background: #1e1e1e;
  flex: 1;
  color: #d4d4d4;
}
</style>
