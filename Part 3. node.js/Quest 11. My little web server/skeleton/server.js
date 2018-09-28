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
		let _urlpath = urlpath(req.method, req.url.pathname);
		switch(req.method){
			case 'GET':
				router[_urlpath](req, res);
				break;
			case 'POST':
				bodyparser(req, res, router[_urlpath]);
				break;
		};
	} catch (error) {
		console.log(error);
		res.end(http.STATUS_CODES[404]);
	}
};

function urlpath(method, pathname){
	console.log(method + ':' + pathname);
	return method + ':' + pathname;
};

function bodyparser(req, res, callback){
	let body = '';
	req.on('data', chunk => {
		body += chunk;
	})
	req.on('end', () => {
		req['body'] = query_parser.parse(body);
		callback(req, res);
	});
};

router['GET:/'] = (req, res) => {
	res.end('Hello World!');
};

router['GET:/foo'] = (req, res) => {
	res.end('Hello, ' + req.url.query.bar);
};

router['POST:/foo'] = (req, res) => {
	res.end('Hello, ' + req.body.bar)
};