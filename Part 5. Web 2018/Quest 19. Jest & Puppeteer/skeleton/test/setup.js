const 
    database = require('../database/database.js'),
    path = require('path');

module.exports = async () => {
    const db = new database();
    await db.setUp(path.join(__dirname, '../database/script/testUp.sql'));
    await db.close();
};