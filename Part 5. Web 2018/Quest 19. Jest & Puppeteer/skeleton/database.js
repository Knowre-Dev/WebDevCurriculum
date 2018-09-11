const mysql = require('mysql');

class database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'test',
            password: 'test',
            database: 'test'
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
}

module.exports = database;