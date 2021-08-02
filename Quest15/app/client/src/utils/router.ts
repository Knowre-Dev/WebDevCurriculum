import Component from '../components/Component';
import Login from '../components/Login';
import { Notepad } from '../components/Notepad';
import { Ctx } from '../index';

type RouterCtx = Omit<Ctx, 'router'>;

export type RoutePaths = '/' | '/login';

// type GConstructor<T> = new (...args: any) => T;
export type Routes = Partial<Record<RoutePaths, typeof Component>>;

export class Router {
  private readonly $target: Element;
  private readonly ctx: RouterCtx;
  public current: Component;

  public routes: Routes = {
    '/': Notepad,
    '/login': Login,
  };

  constructor($target: Element, ctx: RouterCtx) {
    this.$target = $target;
    this.ctx = ctx;
  }
  init(): void {
    this.push('/');
  }

  async push(path: RoutePaths): Promise<void> {
    this.current = await this.getComponent(path);
    window.history.pushState({}, path, window.location.origin + path);
  }

  async getComponent(path: RoutePaths): Promise<Component> {
    const ComponentClass = Object.prototype.hasOwnProperty.call(this.routes, path)
      ? this.routes[path]
      : null;
    if (!ComponentClass) {
      throw 'unknown path';
    }
    return await ComponentClass.create(
      this.$target,
      {},
      {
        ...this.ctx,
        router: this,
      }
    );
  }
}
