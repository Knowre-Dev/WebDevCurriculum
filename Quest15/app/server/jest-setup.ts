import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import { Doc } from './src/models/Doc';
import User from './src/models/User';
import { getHashByPassword } from './src/utils/hash';

let sequelize: Sequelize;
beforeAll(async () => {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    models: [__dirname + '/src/models'],
    logging: false,
  });
  await sequelize.sync();
  await init();
});

afterAll(async () => {
  // await sequelize.dropAllSchemas({ logging: true });
});

const init = async () => {
  const numArr = [...Array(5).keys()];
  const users = await Promise.all(
    numArr.map(async v =>
      User.create(
        {
          userName: `guest${v}`,
          nickName: `guest${v}`,
          password: await getHashByPassword(`guest${v}`),
        },
        { raw: true }
      )
    )
  );
  await Promise.all(
    users.map(async user => {
      return await Promise.all(
        [...Array(3).keys()].map(async v => {
          await Doc.create(
            {
              name: `file${v}.txt`,
              text: `${user.userName} test text ${v}`,
              userId: user.id,
            },
            { raw: true }
          );
        })
      );
    })
  );
};
