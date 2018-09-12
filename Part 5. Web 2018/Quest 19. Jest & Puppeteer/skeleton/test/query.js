const server = require('../server.js');
const r2 = require('r2');

test('test', async () => {
    let res = await r2.post('http://localhost:8080').response;
    console.log('test done');
});

afterAll(() => {
    server.close();
});
