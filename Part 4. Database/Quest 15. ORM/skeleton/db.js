const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'test', 'test', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    query: {
        raw:true
    },
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
    
    return User.bulkCreate(
        [
            {
                id: 'test1',
                pw: 'JPJi8J6DVt7Ga4Fp5LraJBw5rgtjHlzB44QK93RTozI=',
                name: 'test1'
            },
            {
                id: 'test2',
                pw: 'f5ecW9of/65/JiJAUAzcqr83mZWfXVUcwo0O0j7l8pc=',
                name: 'test2'
            },
        ]
    );
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
            fields: ['userId']
        },
        {
            fields: ['userId', 'title']
        }
    ]
});

Memo.sync({force: true});

module.exports = {
    User: User,
    Memo: Memo
};