const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	session = require('express-session'),
	cookie_parser = require('cookie-parser'),
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

app.use(express.static('client'));

app.use(express.json());

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

app.use(cookie_parser());

const server = app.listen(8080, () => {
	console.log('Server started!');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */
app.get('/user', (req, res) => {
	if(req.session.userid){
		res.status(200).send(JSON.stringify({output: req.session.userid}));
	}else{
		res.status(401).end();
	}
});

app.post('/logout', (req, res) => {
	req.session.destroy();
	res.status(200).end();
});

app.post('/login', async (req, res) => {
	const id = req.body.input.id;
	const pw = req.body.input.pw;
	const user = users[id];	
	
	if(!user){
		res.status(401).send(JSON.stringify({output: '존재하지 않는 ID'}));
		
	}else if(user.pw == pw){
		await make_directory(get_base_dir(id));
		req.session['userid'] = id;
		res.status(200).send(JSON.stringify({output: id}));
	}else{
		res.status(401).send(JSON.stringify({output: '비밀번호 불일치'}));
	}
});

app.get('/files', async (req, res) => {
	try {
		const filelist = await readdir(get_base_dir(req.session.userid));
		res.status(200).send(JSON.stringify({output: filelist}));
	} catch (error) {
		res.status(500).end();
	};
});

app.post('/create', async (req, res) => {
	try {
		const filename = req.body.input;
		const filelist = await readdir(get_base_dir(req.session.userid));
		if(filelist.includes(filename)){
			res.status(409).end();
		}else{
			const filepath = path.join(get_base_dir(req.session.userid), filename);
			await writefile(filepath, '');
			res.status(200).end();
		}
	} catch (error) {
		res.status(500).end();
	};
});

app.get('/:filename', async (req, res) => {
	try {
		const filename = req.params.filename;
		const filepath = path.join(get_base_dir(req.session.userid), filename);
		const content = await readfile(filepath);
		res.cookie(`${req.session.userid}.filename`, filename)
		res.status(200).send(JSON.stringify({output: content}));
	} catch (error) {
		res.status(500).end();
	}
});

app.post('/:filename', async (req, res) => {
	try {
		const input = req.body.input;
		const filepath = path.join(get_base_dir(req.session.userid), req.params.filename);
		await writefile(filepath, input.content);
		res.cookie(`${req.session.userid}.position`, input.position);
		res.status(200).end();
	} catch (error) {
		res.status(500).end();
	}
});

function readdir(dirpath){
	return new Promise((resolve, reject) => {
		fs.readdir(dirpath, (err, data) => {
			if(err) reject(err);
			else resolve(data);
		});
	});
}

function writefile(filepath, text){
	return new Promise((resolve, reject) => {
		fs.writeFile(filepath, text, {
			encoding: 'utf8'
		},(err) => {
			if(err) reject(err);
			else resolve();
		})
	});
}

function readfile(filepath){
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, {
			encoding: 'utf8'
		}, (err, data) => {
			if(err) reject(err);
			else resolve(data);
		});
	});
}

function make_directory(dirpath){
	return new Promise((res, rej) => {
		fs.mkdir(dirpath, err => {
			if(err) rej(err);
			else res(dirpath);
		});
	}).catch(err => {});
}

function get_base_dir(userid){
	return path.join(__dirname, 'memo', userid);
}
