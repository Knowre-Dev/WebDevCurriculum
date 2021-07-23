import fs from 'fs';
import path from 'path';
import Sequel from 'sequelize';

const { Sequelize } = Sequel;
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const Model = require(path.join(__dirname, file));
    Model['default']['initialize'](sequelize);
  });

Object.values(sequelize.models)
  .filter(model => typeof model.associate === 'function')
  .filter(model => model.associate(sequelize.models));

export default sequelize;
