import { PickedDoc } from './doc.type';

export class Doc {
  origin: PickedDoc;
  id: string;
  name: string;
  text: string;
  constructor(doc: PickedDoc) {
    Object.assign(this, doc);
    this.origin = doc;
  }
  get isModified(): boolean {
    return this.text !== this.origin.text || this.name !== this.origin.name;
  }
  get plain(): PickedDoc {
    return {
      id: this.id,
      name: this.name,
      text: this.text,
    };
  }
}
