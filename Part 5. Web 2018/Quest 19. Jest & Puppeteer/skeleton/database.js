const 
    fs = require('fs'),
    path = require('path'),
    {promisify} = require('util'),
    mysql = require('mysql');

class database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'test',
            password: 'test',
            database: 'test',
            multipleStatements: true
        });
    }

    async query(sql, args) {
        return new Promise((res, rej) => {
            this.connection.query(sql, args, (err, rows) => {
                if(err) {
                    rej(err);
                }
                else{
                    res(rows);
                }
            });
        });
    }

    async initialize(path) {
        console.log(path);
        const readFile = promisify(fs.readFile);
        const sql = await readFile(path, 'utf8');
        return new Promise((res, rej) => {
            this.connection.query(sql, (err, rows) => {
                if(err) {
                    console.log(err);
                    rej(err);
                }
                else{
                    res(rows);
                }
            });
        });
    }

    async close() {
        this.connection.end();
    }
}

// const test = new database();
// const result = test.initialize(path.join(__dirname, 'script.sql'));
// result.then(rtn => console.log(rtn))
module.exports = database;