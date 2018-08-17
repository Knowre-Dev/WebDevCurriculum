const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	app = express();

app.use(express.static('client'));

app.use(express.json());

const server = app.listen(8080, () => {
	console.log('Server started!');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */
app.get('/files', async (req, res) => {
	try {
		let dirpath = path.join(__dirname, 'memo');
		const filelist = await readdir(dirpath);
		res.status(200).send(JSON.stringify({output: filelist}));
	} catch (error) {
		res.sendStatus(500);
	};
});

app.post('/files/create', async (req, res) => {
	try {
		let filename = req.body.input;
		let dirpath = path.join(__dirname, 'memo');
		const filelist = await readdir(dirpath);
		if(filelist.includes(filename)){
			res.sendStatus(409);
		}else{
			let filepath = path.join(dirpath, filename);
			await writefile(filepath, '');
			res.sendStatus(200);
		}
	} catch (error) {
		res.sendStatus(500);
	};
});

app.get('/files/:filename', async (req, res) => {
	try {
		let filepath = path.join(__dirname, 'memo', req.params.filename);
		const content = await readfile(filepath);
		res.status(200).send(JSON.stringify({output: content}));
	} catch (error) {
		res.sendStatus(500);
	}
});

app.post('/files/:filename', async (req, res) => {
	try {
		let filepath = path.join(__dirname, 'memo', req.params.filename);
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
