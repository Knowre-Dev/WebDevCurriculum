const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	session = require('express-session'),
	app = express();

const users = {
	'test1': {
		pw: '1234',
		name: 't'
	},
	'test2': {
		pw: '2345',
		name: 'tt'
	},
	'test3': {
		pw: '3456',
		name: 'ttt'
	}
};

const base_dir = path.join(__dirname, 'memo');

app.use(express.static('client'));

app.use(express.json());

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 10000
	}
}));

const server = app.listen(8080, () => {
	console.log('Server started!');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */
app.get('/user', (req, res) => {
	console.log(req.cookies);
	if(req.session.userid){
		res.sendStatus(200);
	}else{
		res.sendStatus(401);
	}
});

app.post('/logout', (req, res) => {
	req.session.destroy();
	res.sendStatus(200);
});

app.post('/login', (req, res) => {
	const id = req.body.input.id;
	const pw = req.body.input.pw;
	const user = users[id];	
	
	if(!user){
		res.status(401).send(JSON.stringify({output: '존재하지 않는 ID'}));
	}else if(user.pw == pw){
		req.session['userid'] = id;
		res.status(200).send(JSON.stringify({output: 'success'}));
	}else{
		res.status(401).send(JSON.stringify({output: '비밀번호 불일치'}));
	}
});

app.get('/files', async (req, res) => {
	try {
		const filelist = await readdir(path.join(base_dir));
		res.status(200).send(JSON.stringify({output: filelist}));
	} catch (error) {
		res.sendStatus(500);
	};
});

app.post('/files/create', async (req, res) => {
	try {
		const filename = req.body.input;
		const filelist = await readdir(base_dir);
		if(filelist.includes(filename)){
			res.sendStatus(409);
		}else{
			const filepath = path.join(base_dir, filename);
			await writefile(filepath, '');
			res.sendStatus(200);
		}
	} catch (error) {
		res.sendStatus(500);
	};
});

app.get('/files/:filename', async (req, res) => {
	try {
		const filepath = path.join(base_dir, req.params.filename);
		const content = await readfile(filepath);
		res.status(200).send(JSON.stringify({output: content}));
	} catch (error) {
		res.sendStatus(500);
	}
});

app.post('/files/:filename', async (req, res) => {
	try {
		const filepath = path.join(base_dir, req.params.filename);
		await writefile(filepath, req.body.input);
		res.sendStatus(200);
	} catch (error) {
		res.sendStatus(500);
	}
});

async function readdir(dirpath){
	return new Promise((resolve, reject) => {
		fs.readdir(dirpath, (err, data) => {
			if(err) reject(err);
			else resolve(data);
		});
	});
}

async function writefile(filepath, text){
	return new Promise((resolve, reject) => {
		fs.writeFile(filepath, text, {
			encoding: 'utf8'
		},(err) => {
			if(err) reject(err);
			else resolve();
		})
	});
}

async function readfile(filepath){
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, {
			encoding: 'utf8'
		}, (err, data) => {
			if(err) reject(err);
			else resolve(data);
		});
	});
}
