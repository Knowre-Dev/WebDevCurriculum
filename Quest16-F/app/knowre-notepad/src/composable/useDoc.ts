import { Doc } from '@/types';
import { DocModel } from '@/types/DocModel';
import { apolloClient } from '@/vue-apollo';
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { reactive, toRefs } from 'vue';

provideApolloClient(apolloClient);

type State = {
  docs: DocModel[];
  curr: DocModel | null;
};

const initState: State = {
  docs: [],
  curr: null,
};

export default function useDoc() {
  const state = reactive(initState);

  const getDocs = () => {
    const { onResult } = useQuery(gql`
      query {
        docs {
          id
          name
          text
        }
      }
    `);
    onResult((result) => {
      state.docs = result?.data?.docs.map((doc: Doc) => new DocModel(doc)) || [];
      state.curr = state.docs[0];
    });
  };

  const create = async () => {
    const name = prompt('파일명을 입력하세요');

    if (!name) {
      return;
    }
    if (!validateDocName(name)) {
      return alert('이미 존재하는 파일명 입니다.');
    }

    const { mutate: create } = useMutation(gql`
      mutation ($createDocName: String!) {
        createDoc(name: $createDocName) {
          id
          text
          name
        }
      }
    `);

    const res = await create({ createDocName: name });
    const createdDoc = res?.data?.createDoc || null;
    if (createdDoc) {
      const newDoc = new DocModel(createdDoc);
      state.docs.push(newDoc);
      select(newDoc);
    }
  };

  const save = async (modifiedDoc: Doc) => {
    const { mutate: save } = useMutation(gql`
      mutation ($updateDocDoc: UpdateDocInput!) {
        doc: updateDoc(doc: $updateDocDoc) {
          id
          name
          text
        }
      }
    `);
    const res = await save({ updateDocDoc: modifiedDoc });
    const savedDoc = res?.data?.doc || null;
    if (savedDoc) {
      const savedDocModel = new DocModel(savedDoc);
      const currIndex = state.docs.findIndex((doc: DocModel) => doc.id === modifiedDoc.id);
      state.docs = [
        ...state.docs.slice(0, currIndex),
        savedDocModel,
        ...state.docs.slice(currIndex + 1, state.docs.length),
      ];
      select(savedDocModel);
    }
  };

  const remove = async (docId: string) => {
    const { mutate: remove } = useMutation(gql`
      mutation ($deleteDocId: String!) {
        docs: deleteDoc(id: $deleteDocId) {
          id
          name
          text
        }
      }
    `);

    const res = await remove({ deleteDocId: docId });
    if (!res?.errors) {
      state.docs = state.docs.filter((doc) => doc.id !== docId);
    }
  };

  const select = (doc: DocModel) => {
    state.curr = doc;
  };

  const validateDocName = (name: string) => {
    return !state.docs.map((doc) => doc.name).includes(name);
  };

  return {
    ...toRefs(state),
    getDocs,
    create,
    save,
    remove,
    select,
    validateDocName,
  };
}
