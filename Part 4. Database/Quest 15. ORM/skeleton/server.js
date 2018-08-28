const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	crypto = require('crypto');
	db = require('./db.js'),
	session = require('express-session'),
	cookie_parser = require('cookie-parser'),
	app = express();

const salt = '!@#$%^';

const users = {
	'test1': {
		pw: '1234',
		name: 't'
	},
	'test2': {
		pw: '1234',
		name: 'tt'
	},
	'test3': {
		pw: '1234',
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
	const pw = get_real_pw(req.body.input.pw);
	const user = await db.User.findById('test1');

	if(!user){
		res.status(401).send(JSON.stringify({output: '존재하지 않는 ID'}));
		
	}else if(user.pw == pw){
		req.session['userid'] = id;
		res.status(200).send(JSON.stringify({output: id}));
	}else{
		res.status(401).send(JSON.stringify({output: '비밀번호 불일치'}));
	}
});

app.get('/memos', async (req, res) => {
	try {
		const memos = await get_memos(req.session.userid);
		res.status(200).json({output: memos});
	} catch (error) {
		console.log(error);
		res.status(500).end();
	};
});

app.post('/create', async (req, res) => {
	try {
		const title = req.body.input;
		const memos = await get_memos(req.session.userid);
		
		if(memos.map(x => x.title).includes(title)){
			res.status(409).end();
		}else{
			await post_memo(req.session.userid, title);
			res.status(200).end();
		}
	} catch (error) {
		console.log(error);
		res.status(500).end();
	};
});

app.get('/:title', async (req, res) => {
	try {
		const title = req.params.title;
		const userid = req.session.userid;
		const memo = await get_memo(userid, title);

		res.cookie(`${req.session.userid}.filename`, title)
		res.status(200).json({output: memo[0]});		
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
});

app.post('/:title', async (req, res) => {
	try {
		const input = req.body.input;
		const title = req.params.title;
		const userid = req.session.userid;
		
		await put_memo(userid, title, input.content);

		res.cookie(`${req.session.userid}.position`, input.position);
		res.status(200).end();
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
});

function get_memos(userid){
	return new Promise((res, rej) => {
		db.Memo.findAll({
			attributes: ['title'],
			where: {userId: userid}
		}).then(result => res(result)).catch(err => rej(err));
	});
}

function get_memo(userid, title){
	return new Promise((res, rej) => {
		db.Memo.findAll({
			attributes: ['title', 'content'],
			where: {
				userId: userid,
				title: title
			}
		}).then(result => res(result)).catch(err => rej(err));
	})
}

function post_memo(userid, title){
	return new Promise((res, rej) => {
		db.Memo.create({
			userId: userid,
			title: title,
			content: ''
		}).then(() => res()).catch(err => rej(err));
	});
}

function put_memo(userid, title, content){
	return new Promise((res, rej) => {
		db.Memo.update({
			content: content
		},{
			where: {
				userId: userid,
				title: title
			}
		}).then(() => res()).catch(err => rej(err));
	})
}

function get_real_pw(pw){
	let real_pw = pw + salt;
	for(let i=0; i<2; i++){
		real_pw = crypto.createHash('sha256').update(real_pw).digest('base64');
	}
	return real_pw;
}
