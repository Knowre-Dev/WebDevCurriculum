import { Field, ObjectType, ID } from 'type-graphql';
import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Doc } from './Doc';

@ObjectType()
@Table
export default class User extends Model {
  @Field(type => ID)
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Field()
  @Column
  userName!: string;

  @Field()
  @Column
  nickName!: string;

  @Field()
  @Column
  password!: string;

  @Field()
  @CreatedAt
  createdAt!: Date;

  @Field()
  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => Doc, 'userId')
  docs!: Doc[];
}
