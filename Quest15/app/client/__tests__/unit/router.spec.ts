import { ApolloCache, ApolloClient } from '@apollo/client/core';
import Component from '../../src/components/Component';
import { Router } from '../../src/utils/router';

describe('Router', () => {
  it('Component 생성', () => {
    const el = document.createElement('div');
    const router = new Router(el, {
      client: new ApolloClient({ cache: {} as ApolloCache<unknown> }),
    });
    expect(router).not.toBeNull();
  });
});

describe('Router method', () => {
  let router: Router;
  const el = document.createElement('div');

  beforeEach(() => {
    jest.restoreAllMocks();
    router = new Router(el, {
      client: new ApolloClient({ cache: {} as ApolloCache<unknown> }),
    });
  });

  it('push => / , init 하면', async () => {
    const spy = jest.spyOn(router, 'push');
    const fakeComponent = {} as Promise<Component>;
    jest.spyOn(router, 'getComponent').mockReturnValue(fakeComponent);

    await router.init();

    expect(spy).toBeCalledWith('/');
    expect(router.current).toEqual(fakeComponent);
  });

  it('current에 컴포넌트 셋팅, window history push. push 하면', async () => {
    const pushHistorySpy = jest.spyOn(window.history, 'pushState');
    const fakeComponent = {} as Promise<Component>;
    jest.spyOn(router, 'getComponent').mockReturnValue(fakeComponent);

    await router.push('/login');

    expect(router.current).toBe(fakeComponent);
    expect(pushHistorySpy).toBeCalled();
  });

  it('path에 매칭되는 컴포넌트를 리턴한다. getComponent 메소드를 실행했을때', async () => {
    const instance = new Router(el, {
      client: new ApolloClient({ cache: {} as ApolloCache<unknown> }),
    });
    class FakeComponent extends Component {
      async created(): Promise<void> {}
      async mounted(): Promise<void> {}
      template(): string {
        return '';
      }
    }
    instance.routes = {
      '/': FakeComponent,
      '/login': FakeComponent,
    };

    const fakeComponent1 = await instance.getComponent('/');
    const fakeComponent2 = await instance.getComponent('/login');

    expect(fakeComponent1.constructor.name).toBe('FakeComponent');
    expect(fakeComponent2.constructor.name).toBe('FakeComponent');
  });
});
