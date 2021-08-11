import useDoc from '@/composable/useDoc';
import useUser from '@/composable/useUser';
import { reactive, toRefs, unref } from 'vue';

export interface MenuItem {
  id: string;
  label: string;
  action: () => any;
  position: 'left' | 'right';
}

type State = {
  menus: MenuItem[];
};

export function useMenu() {
  const initState: State = {
    menus: [
      {
        id: 'create',
        label: '새파일',
        position: 'left',
        action: () => {
          const { create } = useDoc();
          create();
        },
      },
      {
        id: 'save',
        label: '저장',
        position: 'left',
        action: async () => {
          const { save, curr } = useDoc();
          if (curr?.value) {
            await save(curr.value.plain);
          }
        },
      },
      {
        id: 'logout',
        label: '로그아웃',
        position: 'right',
        action: async () => {
          const { logout } = useUser();
          await logout();
        },
      },
    ],
  };
  const state = reactive(initState);

  return {
    ...toRefs(state),
  };
}
