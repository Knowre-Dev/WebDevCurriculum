import { Field, ObjectType, ID } from 'type-graphql';
import {
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
export class User extends Model {
  @Field(type => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

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
