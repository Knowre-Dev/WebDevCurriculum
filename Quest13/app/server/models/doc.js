import Sequelize from 'sequelize';
import User from './user.js';
const { Model, DataTypes } = Sequelize;

export default class Doc extends Model {
  static initialize(sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
        },
        text: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: 'doc',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.user);
  }
  static findAllByUser(userId) {
    return this.findAll({
      raw: true,
      where: { userId: userId },
      attributes: {
        exclude: ['userId'],
      },
      include: {
        model: User,
        attributes: ['userName', 'id', 'nickName'],
      },
    });
  }

  static deleteDocById(id) {
    return this.destroy({ where: { id: id } });
  }

  static findById(id) {
    return this.findOne({ where: { id: id } });
  }

  static findByName(name) {
    return this.findOne({
      where: { name: name },
      attributes: {
        exclude: ['userId'],
      },
      include: {
        model: User,
        attributes: ['userName', 'id', 'nickName'],
      },
    });
  }
}
