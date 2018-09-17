const 
    r2 = require('r2'),
    testUrl = 'http://localhost:8080/graphql',
    headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    };

test('login by id and pw', async () => {
    try {
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
    } catch (error) {
        console.log(error);
    }
});

test('get user by id', async () => {
    try {
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
    
        expect(res.data.getUser).toEqual({
            id: 'test1',
            name: 'test1'
        });
    } catch (error) {
        console.log(error);
    }
});

test('create memo by userid and title', async () => {
    try {
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
    
        expect(res.data.createMemo).toBeGreaterThanOrEqual(1);
    } catch (error) {
        console.log(error);
    }
});

test('update memo by userid and title', async () => {
    try {
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
    } catch (error) {
        console.log(error);
    }
});

test('get memo by userid and title', async () => {
    try {
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
    } catch (error) {
        console.log(error);
    }
});