import { Length } from 'class-validator';
import { Field, InputType, ObjectType } from 'type-graphql';
import User from '../models/User';

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field({ nullable: false })
  userName!: string;

  @Field({ nullable: false })
  nickName!: string;

  @Field({ nullable: false })
  password!: string;
}

@InputType()
export class LoginInput implements Pick<User, 'userName' | 'password'> {
  @Field()
  userName!: string;

  @Field()
  @Length(4, 32)
  password!: string;
}

@ObjectType()
export class AccessToken {
  @Field()
  accessToken!: string;
}
