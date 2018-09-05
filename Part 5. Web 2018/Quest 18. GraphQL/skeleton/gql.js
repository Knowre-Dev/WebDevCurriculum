const { makeExecutableSchema } = require('graphql-tools');
const database = require('./database.js');

const db = new database();

const typeDefs = `
    type User {
        id: String
        pw: String
        name: String
        salt: String
        lastTitle: String
        isEnalbe: Int
        memos: [Memo]
    }

    type Memo {
        id: Int
        userId: String
        title: String
        content: String
        lastPosition: Int
    }

    type Query {
        user(id: String): User
        memo(userId: String, title: String): Memo
    }

    input keyOfMemo {
        userId: String
        title: String
    }

    type Mutation {
        createMemo(input: keyOfMemo): Int
        updateMemo(input: keyOfMemo, content: String): String
    }
`;

const resolvers = {
    Query: {
        async user(root, {id}, context, info){
            let sql = `select * from USER where id = ?`;
            let result = await db.query(sql, [id]);
            return result[0];
        },
        async memo(root, {userId, title}, context, info){
            let sql = `select * from MEMO where userId = ? and title = ?`;
            let result = await db.query(sql, [userId, title]);
            return result[0];
        }
    },
    User: {
        async memos(user){
            let sql = `select * from MEMO where userId = ?`;
            let result = await db.query(sql, [user.id]);
            return result;
        }
    },
    Mutation: {
        async createMemo(root, {input}, context, info){
            let sql = `insert into MEMO (userId, title) values (?, ?)`;
            let {insertId} = await db.query(sql, [input.userId, input.title]);
            return insertId;
        },
        async updateMemo(root, {input, content}, context, info){
            let sql = `update MEMO set content = ? where userId = ? and title = ?`;
            let {affectedRows} = await db.query(sql, [content, input.userId, input.title]);
            return affectedRows;
        }
    }
}

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});