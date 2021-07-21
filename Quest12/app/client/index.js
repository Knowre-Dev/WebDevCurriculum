import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import fs from 'fs';
const __dirname = path.resolve();

const app = fastify({
  logger: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, '../keys/localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, '../keys/localhost.crt')),
  },
});

app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
});

app.get('/', function (req, reply) {
  return reply.sendFile('index.html'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});
app.get('/login', function (req, reply) {
  return reply.sendFile('login.html');
});

app.listen(3000, (err, address) => {
  if (err) throw err;
});
