const 
    database = require('../database.js'),
    path = require('path'),
    r2 = require('r2');

const db = new database();
const testUrl = 'http://localhost:8080/graphql'
const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
};

beforeAll(async (done) => {
    const result = await db.initialize(path.join(__dirname, '../script.sql'));
    console.log(result);
    done();
})

afterAll(async (done) => {
    await db.close();
    done();
});

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

test('create memo by userid and title', async () => {
    const res = await r2.post(testUrl, {
        headers: headers,
        body: JSON.stringify({
            query: `
                mutation {
                    createMemo(userId: "test1", title: "test title")
                }
            `
        })
    }).json;
    expect(res.data.createMemo).toBeGreaterThan(1);
});

test('update memo by userid and title', async () => {
    const res = await r2.post(testUrl, {
        headers: headers,
        body: JSON.stringify({
            query: `
                mutation {
                    updateMemo(userId: "test1", title: "test title", content: "test", lastPosition: 0)
                }
            `
        })
    }).json;
    expect(res.data.updateMemo).toBe(1);
});

test('get memo by userid and title', async () => {
    const res = await r2.post(testUrl, {
        headers: headers,
        body: JSON.stringify({
            query: `
                query {
                    getMemo(userId: "test1", title: "test title"){
                        userId
                        title
                        content
                        lastPosition
                    }
                }
            `
        })
    }).json;
    
    expect(res.data.getMemo).toEqual({
        userId: 'test1',
        title: 'test title',
        content: 'test',
        lastPosition: 0
    });
});