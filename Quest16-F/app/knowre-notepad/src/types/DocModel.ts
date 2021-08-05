import { Doc } from '@/types/index';

export type ResDoc = Pick<Doc, 'id' | 'name' | 'text'>;

export class DocModel implements Doc {
  origin: ResDoc;
  id: string;
  name: string;
  text: string;

  constructor(doc: ResDoc) {
    this.id = doc.id;
    this.name = doc.name;
    this.text = doc.text;
    this.origin = doc;
  }

  get isModified(): boolean {
    return this.text !== this.origin.text || this.name !== this.origin.name;
  }

  get plain(): ResDoc {
    return {
      id: this.id,
      name: this.name,
      text: this.text,
    };
  }
}
