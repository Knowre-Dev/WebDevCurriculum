<template>
  <div class="notepad">
    <Actions :menus="menus" />
    <TabList :docs="docs" :curr="curr" :set-curr="select" :close="close" />
    <Editor v-if="curr" :doc="curr" @update:doc="(v) => (curr.text = v)" />
  </div>
</template>

<script lang="ts">
import Actions from '@/components/Actions.vue';
import Editor from '@/components/Editor.vue';
import TabList from '@/components/TabList.vue';
import useDoc from '@/composable/useDoc';
import { useMenu } from '@/composable/useMemu';
import useUser from '@/composable/useUser';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { TabList, Editor, Actions },

  setup() {
    const { getUser, logout } = useUser();
    const { docs, remove: close, getDocs, select, curr } = useDoc();
    const { menus } = useMenu();

    getUser();
    getDocs();

    return {
      curr,
      docs,
      menus,
      select,
      close,
      logout,
    };
  },
});
</script>

<style scoped lang="scss">
.notepad {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
