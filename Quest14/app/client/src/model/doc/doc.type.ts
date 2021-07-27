import { Doc } from './doc';

export type PickedDoc = Pick<Doc, 'id' | 'name' | 'text'>;

export interface UpdateDocVars {
  updateDocDoc: PickedDoc;
}
