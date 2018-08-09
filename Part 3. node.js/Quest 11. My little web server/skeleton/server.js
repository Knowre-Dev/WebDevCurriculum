const http = require('http');
const url_parser = require('url');
const query_parser = require('querystring');

let router = {};

http.createServer((req, res) => {
	main(req, res);
}).listen(8080);

function main(req, res){
	try {
		req['url'] = url_parser.parse(req.url, true);
		router[req.url.pathname](req, res);
	} catch (error) {
		console.log(error);
		res.end(http.STATUS_CODES[404]);
	}
};

router['/'] = (req, res) => {
	res.end('Hello World!');
};

router['/foo'] = (req, res) => {
	if(req.method == 'GET'){
		res.end('Hello, ' + req.url.query.bar);
	}else if(req.method == 'POST'){
		let raw_data = '';
		req.on('data', chunk => {
			raw_data += chunk.toString();
		});
		req.on('end', () => {
			let parsed_data = query_parser.parse(raw_data);
			res.end('Hello, ' + parsed_data['bar']);
		});
	};
};