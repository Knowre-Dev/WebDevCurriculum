const 
    database = require('../database/database.js'),
    path = require('path'),
    NodeEnvironment = require('jest-environment-node');

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.db = new database();
  }

  async setup() {
    await super.setup();
    await this.db.testUp(path.join(__dirname, '../database/script/testUp.sql'));
  }

  async teardown() {
    console.log('asdfasdf');
    await this.db.testDown(path.join(__dirname, '../database/script/testDown.sql'));
    await this.db.close();
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;