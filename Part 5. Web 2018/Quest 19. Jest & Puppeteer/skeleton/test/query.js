const r2 = require('r2');

const testUrl = 'http://localhost:8080/graphql'
const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
};

test('login by id and pw', async () => {
    const res = await r2.post(testUrl, {
        headers: headers,
        body: JSON.stringify({    
            query: `
                mutation {
                    login(id: "test1", pw: "1234")
                }
            `
        })
    }).json;
    expect(res.data.login).toBe('success');
});

test('get user by id', async () => {
    const res = await r2.post(testUrl, {
        headers:headers,
        body: JSON.stringify({
            query: `
                query {
                    getUser(id: "test1"){
                        id
                        name
                    }
                }
            `
        })
    }).json;
    expect(res.data.getUser.id).toBe('test1');
});

test('get memo by userid and title', async () => {
    const res = await r2.post(testUrl, {
        headers: headers,
        body: JSON.stringify({
            query: `
                query {
                    getMemo(userId: "test1", title: "first title"){
                        id
                        userId
                        title
                        content
                        lastPosition
                    }
                }
            `
        })
    }).json;
    expect(res.data.getMemo.title).toBe('first title');
});

test('create memo by userid and title', async () => {
    const res = await r2.post(testUrl, {
        headers: headers,
        body: JSON.stringify({
            query: `
                mutation {
                    createMemo(userId: "test1", title: "third title")
                }
            `
        })
    }).json;
    expect(res.data.createMemo).toBe(3);
});

test('update memo by userid and title', async () => {
    const res = await r2.post(testUrl, {
        headers: headers,
        body: JSON.stringify({
            query: `
                mutation {
                    updateMemo(userId: "test1", title: "first title", content: "test", lastPosition: 0)
                }
            `
        })
    }).json;
    expect(res.data.updateMemo).toBe(1);
});