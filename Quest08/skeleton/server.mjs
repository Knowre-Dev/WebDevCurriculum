import http from 'http';

const server = http.createServer((req, res) => {
    /* TODO: 각각의 URL들을 어떻게 처리하면 좋을까요? */
    res.end();
});

server.listen(8000);
