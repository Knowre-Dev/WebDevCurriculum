<template>
  <div class="tab" :class="{ 'tab--selected': doc === curr }" @click="$emit('doc', doc)">
    <span class="tab-name">{{ doc.name }}</span>
    <span class="tab-status" :class="{ 'tab-status--saved': !doc.isModified }">●</span>
    <span class="tab-close-btn" @click.stop="$emit('close', doc)">×</span>
  </div>
</template>

<script lang="ts">
import { DocModel } from '@/types/DocModel';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Tab',
  props: {
    doc: Object as PropType<DocModel>,
    curr: Object as PropType<DocModel>,
  },
});
</script>

<style scoped lang="scss">
.tab {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
  cursor: pointer;
  background: #2d2d2d;
  color: rgba(255, 255, 255, 0.5);
  height: 2rem;
  box-sizing: border-box;
  align-items: center;
  &--selected {
    background: #1e1e1e;
    color: #cccccc;
  }
  .tab-name {
    white-space: pre;
  }
  .tab-status {
    margin: 1rem;
    &--saved {
      visibility: hidden;
    }
  }
  .tab-close-btn {
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
