import { ADD_DOC, DELETE_DOC, UPDATE_DOC } from '../api/doc';
import { GET_USER } from '../api/user';
import { ResultType } from '../model';
import { Doc } from '../model/doc/doc.model';
import { PickedDoc, UpdateDocVars } from '../model/doc/doc.type';
import { UserModel } from '../model/user/user.model';
import { Actions } from './Actions';
import Component from './Component';
import { Editor } from './Editor';
import { TabList } from './TabList';

interface ResUserAndDocs {
  user: UserModel;
  docs: PickedDoc[];
}

interface State {
  user: UserModel;
  docs: Doc[];
  curr: Doc;
}

export class Notepad extends Component {
  public state: State;
  tabs: TabList;
  template(): string {
    return `
      <section class="actions" data-component="actions" data-testid="actions"></section>
      <section class="tabs" data-component="tabs" data-testid="tabs"></section>
      <section class="editor" data-component="editor" data-testid="editor"></section>
    `;
  }

  async created(): Promise<void> {
    const res = await this.client.query<ResUserAndDocs>({ query: GET_USER });
    if (!Reflect.has(res.data, 'user') || !res.data.user) {
      return this.router.push('/login');
    }
    const docs = res.data.docs.map(doc => new Doc(doc));
    this.setState({
      user: res.data.user,
      docs: docs || [],
      curr: docs[0],
    });
  }

  async mounted(): Promise<void> {
    const $actions = this.$target.querySelector('[data-component="actions"]');
    const $tabs = this.$target.querySelector('[data-component="tabs"]');
    const $editor = this.$target.querySelector('[data-component="editor"]');
    await Actions.create($actions, { notepad: this }, this.ctx);
    this.tabs = (await TabList.create($tabs, { notepad: this }, this.ctx)) as TabList;

    await Editor.create($editor, { notepad: this }, this.ctx);
  }

  async add(name: string): Promise<void> {
    if (!this.validateName(name)) {
      throw new Error('The file name already exists.');
    }
    const resDoc = await this.ctx.client.mutate<
      ResultType<'doc', PickedDoc>,
      { createDocName: string }
    >({
      mutation: ADD_DOC,
      variables: { createDocName: name },
    });
    if (!Reflect.has(resDoc.data, 'doc')) {
      throw 'no doc';
    }
    const doc = new Doc(resDoc.data.doc);
    this.setState({
      docs: [...this.state.docs, doc],
    });

    this.open(doc);
  }

  async save(modifiedDoc: Doc): Promise<void> {
    const { docs } = this.state;
    const resDoc = await this.ctx.client.mutate<ResultType<'doc', PickedDoc>, UpdateDocVars>({
      mutation: UPDATE_DOC,
      variables: { updateDocDoc: modifiedDoc.plain },
    });
    if (!Reflect.has(resDoc.data, 'doc')) {
      throw 'no doc';
    }
    const savedDoc = new Doc(resDoc.data.doc);
    const currIndex = docs.findIndex(doc => modifiedDoc === doc);

    this.setState({
      docs: [...docs.slice(0, currIndex), savedDoc, ...docs.slice(currIndex + 1, docs.length)],
    });
    this.open(savedDoc);
  }

  open(doc: Doc): void {
    this.setState({ curr: doc });
  }

  async close(doc: Doc): Promise<void> {
    const { docs } = this.state;
    const resDocs = await this.ctx.client.mutate<
      ResultType<'docs', PickedDoc[]>,
      { deleteDocId: string }
    >({
      mutation: DELETE_DOC,
      variables: { deleteDocId: doc.id },
    });
    if (!Reflect.has(resDocs.data, 'docs')) {
      throw 'no doc';
    }
    this.setState({
      docs: docs.filter(d => d !== doc),
    });
    const length = docs.length;
    this.state.curr = null;
    if (length >= 1) {
      this.open(docs[length - 1]);
    } else {
      this.setState({ curr: null });
    }
  }
  setState(newState: Partial<State>): void {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  validateName(name: string): boolean {
    const { docs } = this.state;
    return !docs.map(doc => doc.name).includes(name);
  }
}
