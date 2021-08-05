import { ApolloServer } from 'apollo-server-express';
import { compare } from 'bcrypt';
import { getApolloServer } from '../src/apolloServer';
import UserService from '../src/service/user.service';
import { CreateUserInput } from '../src/types/user';

describe('User Service', () => {
  let server: ApolloServer;
  const testUser: CreateUserInput = {
    userName: 'test',
    nickName: 'test',
    password: 'test',
  };

  beforeAll(async () => {
    server = await getApolloServer();
  });

  it('createUser 유저 생성', async () => {
    const createdUser = await UserService.createUser(
      testUser as CreateUserInput
    );

    expect(createdUser.userName).toBe(testUser.userName);
    expect(createdUser.nickName).toBe(testUser.nickName);
    expect(await compare(testUser.password, createdUser.password)).toBeTruthy();
  });

  it('UserName으로 User정보 찾기', async () => {
    const userName = testUser.userName;

    const user = await UserService.getUserByUserName(userName);

    expect(user.userName).toBe(testUser.userName);
    expect(user.nickName).toBe(testUser.nickName);
  });
});
