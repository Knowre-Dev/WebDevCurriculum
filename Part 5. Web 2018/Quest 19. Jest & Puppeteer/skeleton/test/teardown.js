const 
    database = require('../database/database.js'),
    path = require('path');

module.exports = async () => {
    const db = new database();
    await db.tearDown(path.join(__dirname, '../database/script/testDown.sql'));
    await db.close();
};