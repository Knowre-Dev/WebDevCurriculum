<template>
  <div class="actions">
    <Button
      v-for="menu in leftMenus"
      :key="menu.id"
      @click="() => menu.action()"
      class="menu-button"
      padding="10px"
      margin="5px"
    >
      {{ menu.label }}
    </Button>
    <div class="space"></div>
    <Button
      v-for="menu in rightMenus"
      :key="menu.id"
      @click="() => menu.action()"
      class="menu-button"
      padding="10px"
      margin="5px"
    >
      {{ menu.label }}
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '@/components/Button.vue';
import { MenuItem } from '@/composable/useMemu';
import { computed, defineComponent, PropType, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Actions',
  components: { Button },
  props: {
    menus: {
      type: Object as PropType<MenuItem[]>,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      padding: '20px',
      margin: '10px',
    });

    const leftMenus = computed(() => props.menus.filter((menu) => menu.position === 'left'));
    const rightMenus = computed(() => props.menus.filter((menu) => menu.position === 'right'));

    return {
      ...toRefs(state),
      leftMenus,
      rightMenus,
    };
  },
});
</script>

<style scoped lang="scss">
.actions {
  flex: 0 0 2rem;
  gap: 10px;
  padding: 0 1rem;
  background: #888b94;
  display: flex;
  align-items: center;
  .space {
    flex: 1;
  }

  .menu-button {
    width: 100px;
    margin: 5px;
  }
}
</style>
