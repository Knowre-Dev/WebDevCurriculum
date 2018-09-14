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
    console.log(res);
});