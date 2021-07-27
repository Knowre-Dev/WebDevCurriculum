import { ApolloClient } from '@apollo/client/core';
import { Ctx } from '../index';
import { Router } from '../utils/router';

export default abstract class Component {
  protected $target;
  protected props;
  protected ctx: Ctx;

  constructor($target: Element, props: Record<string, unknown> = {}, ctx: Ctx) {
    this.$target = $target;
    this.props = props;
    this.ctx = ctx;
    this.init();
  }

  async render(): Promise<void> {
    this.$target.innerHTML = this.template();
    await this.mounted();
  }

  async init(): Promise<void> {
    await this.created();
    await this.render();
  }

  abstract template(): string;

  abstract created(): void;

  abstract mounted(): void;

  get client(): ApolloClient<unknown> {
    return this.ctx.client;
  }

  get router(): Router {
    return this.ctx.router;
  }
}
