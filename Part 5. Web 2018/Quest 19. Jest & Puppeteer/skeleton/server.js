const express = require('express'),
	path = require('path'),
	database = require('./database/database.js'),
	graphqlHTTP = require('express-graphql'),
	jwt = require('express-jwt'),
	schema = require('./gql.js')
;

const app = express();

const db = new database();

(async () => {
	await db.initialize();
})();

app.use(express.static('client'));

app.use(express.json());

const server = app.listen(8080, () => {
	console.log('Server started!');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */

const auth = jwt({
	secret: 'secret',
	credentialsRequired: false
})

app.use('/graphql', auth, graphqlHTTP((req,res) => ({
	schema: schema,
	context: {
		req: req,
		res: res,
		db: db
	},
	graphiql: true,
})));

app.use((err, req, res, next) => {
	if(err.name == 'UnauthorizedError'){
		res.json({});
	}
});