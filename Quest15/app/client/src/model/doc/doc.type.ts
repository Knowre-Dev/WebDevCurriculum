import { Doc } from './doc.model';

export type PickedDoc = Pick<Doc, 'id' | 'name' | 'text'>;

export interface UpdateDocVars {
  updateDocDoc: PickedDoc;
}
