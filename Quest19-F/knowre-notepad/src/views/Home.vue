<template>
  <div class="notepad">
    <Actions :menus="menus" />
    <TabList :docs="docs" :curr="curr" :set-curr="select" :close="close" />
    <Editor v-if="curr" :doc="curr" @update:doc="(v) => (curr.text = v)" />
    <div>wasm:{{ getHashWasm(curr?.text || '') }}</div>
    <div>js: {{ getHashJs(curr?.text || '') }}</div>
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
import { hash } from '@/pkg';
import sha256 from 'crypto-js/sha256';

export default defineComponent({
  name: 'Home',
  components: { TabList, Editor, Actions },

  setup: function () {
    const { getUser, logout } = useUser();
    const { docs, remove: close, getDocs, select, curr } = useDoc();
    const { menus } = useMenu();

    getUser();
    getDocs();

    const getHashWasm = (text: string) => {
      return hash(text);
    };

    const getHashJs = (text: string) => {
      return sha256(text);
    };

    return {
      curr,
      docs,
      menus,
      select,
      close,
      getHashWasm,
      getHashJs,
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
