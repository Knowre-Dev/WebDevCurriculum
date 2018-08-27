const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'test', 'test', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = sequelize.define('M_USER', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    pw: {
        type: Sequelize.STRING(256)
    },
    name: {
        type: Sequelize.STRING(100)
    },
    lastTitle: {
        type: Sequelize.STRING(100)
    },
    isEnable: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
    }
});

User.sync({force: true}).then(() => {
    return User.create({
        id: 'test',
        pw: 'test',
        name: 'test'
    });
});

const Memo = sequelize.define('MEMO', {
    userId: {
        type: Sequelize.STRING(50)
    },
    title: {
        type: Sequelize.STRING(100)
    },
    content: {
        type: Sequelize.TEXT()
    },
    lastPosition: {
        type: Sequelize.INTEGER
    }
},
{
    indexes: [
        {
            unique: true,
            fields: ['userId']
        },
        {
            unique: true,
            fields: ['userId', 'title']
        }
    ]
});

Memo.sync({force: true});

module.exports = {
    User: User,
    Memo: Memo
};