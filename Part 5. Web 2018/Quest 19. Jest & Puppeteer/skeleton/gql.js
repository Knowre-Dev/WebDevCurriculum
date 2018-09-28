const 
    jsonwebtoken = require('jsonwebtoken'),
    crypto = require('crypto'),
    { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
    type Member {
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
        getUser(id: String): Member
        getMemo(userId: String, title: String): Memo
    }

    type Mutation {
        auth: String
        login(id: String, pw: String): String
        createMemo(userId: String, title: String): Int
        updateMemo(userId: String, title: String, content: String, lastPosition: Int): Int
    }
`;

const resolvers = {
    Query: {
        async getUser(root, {id}, context, info){
            try {
                let sql = `select * from MEMBER where id = ?`;
                let result = await context.db.query(sql, [id]);
                return result[0];
            } catch (error) {
                console.log(error)
            }
        },
        async getMemo(root, {userId, title}, context, info){
            try {
                let sql = `select * from MEMO where userId = ? and title = ?`;
                let result = await context.db.query(sql, [userId, title]);
                return result[0];
            } catch (error) {
                console.log(error)
            }
        }
    },
    Member: {
        async memos(root, _, context, info){
            try {
                let sql = `select * from MEMO where userId = ?`;
                let result = await context.db.query(sql, [root.id]);
                return result;
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        auth(root, _, context, info){
            try {
                const userid = context.req.user.userid;
                if(userid){
                    return userid;
                }else{
                    return null;
                }
            } catch (error) {
                console.log(error)
            }
        },
        async login(root, {id, pw}, context, info){
            try {
                let msg;
                let sql = `select id, pw, salt from MEMBER where id = ?`;
                let result = await context.db.query(sql, [id]);
                if(result.length > 0){
                    if(result[0].pw == get_real_pw(pw, result[0].salt)){
                        context.res.cookie(
                            'user',
                            jsonwebtoken.sign({
                                userid: id
                            }, 'secret', {expiresIn: '1d'})
                        );
                        msg = 'success';
                    }else{
                        msg = '비밀번호가 일치하지 않습니다.';
                    }
                }else{
                    msg = '아이디가 존재하지 않습나다.';
                }
                return msg;
            } catch (error) {
                console.log(error);
            }
        },
        async createMemo(root, {userId, title}, context, info){
            try {
                let sql = `insert into MEMO (userId, title) 
                select ?, ? 
                where (select count(*) from MEMO where userId = ? and title = ?) = 0 `;
                let {insertId} = await context.db.query(sql, [userId, title, userId, title]);
                if(insertId > 0){
                    sql = `update MEMBER set lastTitle = ? where id = ?`
                    await context.db.query(sql, [title, userId]);
                }
                return insertId;
            } catch (error) {
                console.log(error)
            }
        },
        async updateMemo(root, {userId, title, content, lastPosition}, context, info){
            try {
                let sql = `update MEMO set content = ?, lastPosition = ? where userId = ? and title = ?`;
                let {affectedRows} = await context.db.query(sql, [content, lastPosition, userId, title]);
                if(affectedRows > 0){
                    sql = `update MEMBER set lastTitle = ? where id = ?`
                    await context.db.query(sql, [title, userId]);
                }
                return affectedRows;
            } catch (error) {
                console.log(error)
            }
        }
    }
}

function get_real_pw(pw, salt){
	let real_pw = pw + salt;
	for(let i=0; i<2; i++){
		real_pw = crypto.createHash('sha256').update(real_pw).digest('base64');
	}
	return real_pw;
}

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});