import Component from '../components/Component';
import { Login } from '../components/Login';
import { Notepad } from '../components/Notepad';
import { Ctx } from '../index';

type RouterCtx = Omit<Ctx, 'router'>;

export type RoutePaths = '/' | '/login';

type GConstructor<T> = new (...args: any) => T;
export type Routes = Record<RoutePaths, GConstructor<Component>>;

export const routes: Routes = {
  '/': Notepad,
  '/login': Login,
};

export class Router {
  private readonly $target: Element;
  private readonly ctx: RouterCtx;
  private current: Component;

  constructor($target: Element, ctx: RouterCtx) {
    this.$target = $target;
    this.ctx = ctx;
  }
  init(): void {
    this.push('/');
  }

  push(path: RoutePaths): void {
    const Component = Object.prototype.hasOwnProperty.call(routes, path) ? routes[path] : null;
    if (!Component) {
      throw 'unknown path';
    }
    window.history.pushState({}, path, window.location.origin + path);
    this.current = new Component(
      this.$target,
      {},
      {
        ...this.ctx,
        router: this,
      }
    );
  }
}
