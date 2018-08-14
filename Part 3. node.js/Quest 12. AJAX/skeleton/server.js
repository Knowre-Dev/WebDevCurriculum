const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(8080, () => {
	console.log('Server started!');
});

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */
app.get('/files', (req, res) => {

});

async function get_files(path){
	const files = await fs.readdir(path);
	
}