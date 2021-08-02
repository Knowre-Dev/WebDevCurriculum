import { InMemoryCache } from '@apollo/client/cache';
import { ApolloClient } from '@apollo/client/core';
import { getByTestId } from '@testing-library/dom';
import { Ctx } from '../../src';
import { ADD_DOC, DELETE_DOC, UPDATE_DOC } from '../../src/api/doc';
import { GET_USER } from '../../src/api/user';
import { Notepad } from '../../src/components/Notepad';
import { PickedDoc } from '../../src/model/doc/doc.type';
import { Router } from '../../src/utils/router';

jest.mock('@apollo/client/core', () => {
  const actualModule = jest.requireActual('@apollo/client/core');
  return {
    ...actualModule,
  };
});

const returnUserAndDocs = {
  data: {
    user: { id: '63cd2e3a-a609-43a1-8836-b8665775a484', userName: 'test', nickName: 'test' },
    docs: [
      {
        id: 'b37eeed1-275d-4037-91ce-e04daff0296b',
        name: 'test',
        text: 'test',
      },
      {
        id: 'b37eeed2-275d-4037-91ce-e04daff0296b',
        name: 'test2',
        text: 'test2',
      },
    ],
  },
};

const createdDocData = (name: string) => ({
  data: {
    doc: {
      id: 'b37eeed3-275d-4037-91ce-e04daff0296b',
      name: name,
      text: '',
    },
  },
});

const updatedDocData = (doc: PickedDoc) => ({
  data: {
    doc: {
      id: doc.id,
      name: doc.name,
      text: doc.text,
    },
  },
});

describe('Notepad class', () => {
  let el: HTMLElement;
  let cache: InMemoryCache;
  let client: ApolloClient<unknown>;
  let ctx: Ctx;

  beforeEach(() => {
    jest.restoreAllMocks();
    el = document.body;
    cache = new InMemoryCache();
    client = new ApolloClient({ cache: cache });
    ctx = {
      client,
      router: jest.fn() as unknown as Router,
    };
  });

  it('should be able to call new() on Notepad', async () => {
    client.query = jest.fn().mockReturnValue(returnUserAndDocs);
    const ctx: Ctx = {
      client,
      router: jest.fn() as unknown as Router,
    };

    const instance = await Notepad.create(el, {}, ctx);

    expect(instance).toBeTruthy();
    expect(getByTestId(el, 'actions')).toBeInTheDocument();
    expect(getByTestId(el, 'tabs')).toBeInTheDocument();
    expect(getByTestId(el, 'editor')).toBeInTheDocument();
  });

  it('Component가 생성되면 유저 정보와 docs를 요청한다.', async () => {
    client.query = jest.fn().mockReturnValue(returnUserAndDocs);

    await Notepad.create(el, {}, ctx);

    expect(client.query).toBeCalledWith({ query: GET_USER });
  });

  describe('Component 생성후', () => {
    let notepad: Notepad;

    beforeEach(async () => {
      client.query = jest.fn().mockImplementation(({ query }) => {
        switch (query) {
          case GET_USER:
            return returnUserAndDocs;
        }
      });
      client.mutate = jest.fn().mockImplementation(({ mutation, variables }) => {
        switch (mutation) {
          case ADD_DOC:
            return createdDocData(variables.createDocName);
          case UPDATE_DOC:
            return updatedDocData(variables.updateDocDoc);
          case DELETE_DOC:
            return {
              data: {
                docs: returnUserAndDocs.data.docs.filter(doc => doc.id !== variables.deleteDocId),
              },
            };
        }
      });
      notepad = await Notepad.create(el, {}, ctx);
    });

    it('add 시 Mutate createDoc 후 Open ', async () => {
      const openSpy = jest.spyOn(notepad, 'open');
      const fileName = 'test3';

      await notepad.add(fileName);

      expect(client.mutate).toBeCalledWith({
        mutation: ADD_DOC,
        variables: { createDocName: fileName },
      });
      expect(notepad.state.docs.length).toBe(3);
      expect(openSpy).toBeCalled();
    });

    it('중복 파일 이름 add 시 throw', async () => {
      const fileName = 'test2';

      try {
        await notepad.add(fileName);
      } catch (e) {
        expect(e.message).toEqual('The file name already exists.');
      }
    });

    it('open시 curr 변경', async () => {
      const { docs } = notepad.state;

      await notepad.open(docs[0]);
      expect(notepad.state.curr).toBe(docs[0]);

      await notepad.open(docs[1]);
      expect(notepad.state.curr).toBe(docs[1]);
    });

    it('save시 updateDoc 요청', async () => {
      notepad.state.curr.name = 'modifiedName';
      notepad.state.curr.text = 'modifiedText';

      await notepad.save(notepad.state.curr);

      expect(client.mutate).toBeCalledWith({
        mutation: UPDATE_DOC,
        variables: { updateDocDoc: notepad.state.curr.plain },
      });
    });

    it('delete시 deleteDoc 요청', async () => {
      const id = notepad.state.curr.id;
      await notepad.close(notepad.state.curr);

      expect(client.mutate).toBeCalledWith({
        mutation: DELETE_DOC,
        variables: { deleteDocId: id },
      });
    });
  });
});
