import { ApolloClient } from '@apollo/client/core';
import { Ctx } from '../index';
import { Router } from '../utils/router';

export default class Component {
  protected $target;
  protected props;
  protected ctx: Ctx;

  constructor($target: Element, props: Record<string, unknown> = {}, ctx: Ctx) {
    this.$target = $target;
    this.props = props;
    this.ctx = ctx;
  }

  async render(): Promise<void> {
    this.$target.innerHTML = this.template();
    await this.mounted();
  }

  async init(): Promise<void> {
    try {
      await this.created();
      await this.render();
    } catch (e) {
      console.error(e);
    }
  }

  template(): string {
    return 'should be overridden';
  }

  async created(): Promise<void> {}

  async mounted(): Promise<void> {}

  get target(): Element {
    return this.$target;
  }

  get client(): ApolloClient<unknown> {
    return this.ctx.client;
  }

  get router(): Router {
    return this.ctx.router;
  }
  static async create<T>(
    $target: Element,
    props: Record<string, unknown> = {},
    ctx: Ctx
  ): Promise<T> {
    const component = new this($target, props, ctx);
    await component.init();
    return component as unknown as T;
  }
}
