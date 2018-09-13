const server = require('../server.js');
const r2 = require('r2');

const headers = {
    'Content-Type': 'application/json'
};

test('test', async () => {
    let res = await r2.post('http://localhost:8080/graphql', {
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
    console.log(res);
});