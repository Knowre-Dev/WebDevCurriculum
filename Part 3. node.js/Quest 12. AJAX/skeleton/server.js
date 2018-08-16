const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	app = express();

app.use(express.static('client'));

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(8080, () => {
	console.log('Server started!');
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */
app.get('/files', (req, res) => {
	let filepath = path.join(__dirname, 'memo');
	fs.readdir(filepath, (err, data) => {
		res.send(JSON.stringify({output: data}));
	});
});

app.get('/files/:filename', (req, res) => {
	let filename = req.params.filename;
	let filepath = path.join(__dirname, 'memo', filename);
	fs.readFile(filepath, 'utf8', (err,data) =>{
		res.send(JSON.stringify({output: data}));
	});
});

app.post('/files/:filename', (req, res) => {
	let filename = req.params.filename;
	console.log(req.body);
	console.log(filename);
	let filepath = path.join(__dirname, 'memo', filename);
	// fs.writeFile(filepath, data, 'utf8', (err) =>{
	// 	console.log('success');
	// });
});

app.post('files/newfile', (req, res) => {
	console.log(req.body);
});

