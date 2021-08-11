<template>
  <div class="tabs">
    <Tab
      v-for="doc in docs"
      :key="doc.id"
      :doc="doc"
      :curr="curr"
      @click="() => setCurr(doc)"
      @dblclick="() => changeName(doc)"
      @close="() => close(doc.id)"
    />
  </div>
</template>

<script lang="ts">
import Tab from '@/components/Tab.vue';
import { DocModel } from '@/types/DocModel';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TabList',
  components: { Tab },
  props: {
    docs: {
      type: Object as PropType<DocModel[]>,
      required: true,
    },
    curr: Object as PropType<DocModel>,
    setCurr: Function,
    close: Function,
  },
  setup(props) {
    const changeName = (targetDoc: DocModel) => {
      const name = prompt('파일명을 입력하세요');
      const filtered = props.docs.filter((doc) => doc !== targetDoc);
      if (!name) {
        return;
      }
      if (filtered.map((doc) => doc.name).includes(name)) {
        return alert('이미 존재하는 파일명 입니다.');
      }
      targetDoc.name = name;
    };
    return {
      changeName,
    };
  },
});
</script>

<style scoped lang="scss">
.tabs {
  flex: 0 0 2rem;
  display: flex;
  align-items: center;
  background: #252526;
}
</style>
