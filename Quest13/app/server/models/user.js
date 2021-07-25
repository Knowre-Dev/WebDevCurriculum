import Sequelize from 'sequelize';
import { getHashByPassword } from '../utils/hash.js';
const { Model, DataTypes } = Sequelize;
export default class User extends Model {
  static initialize(sequelize) {
    this.init(
      {
        userName: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        nickName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'user',
      }
    );
  }
  static associate(models) {
    this.hasMany(models.doc);
  }

  static async findByUserName(userName) {
    return this.findOne({ where: { userName: userName }, raw: true });
  }

  static async findByUserNameExcludePassword(userName) {
    return this.findOne({
      where: { userName: userName },
      raw: true,
      attributes: {
        exclude: ['password'],
      },
    });
  }

  static async createUser(user) {
    return this.create({
      ...user,
      password: await getHashByPassword(user.password),
    });
  }
}
