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
        this.readFile = promisify(fs.readFile);
    }

    async initialize() {
        const sql = await this.readFile(path.join(__dirname, './script/init.sql'), 'utf8');
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

    async setUp(path) {
        const sql = await this.readFile(path, 'utf8');
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

    async tearDown(path) {
        const sql = await this.readFile(path, 'utf8');
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

module.exports = database;