import { Field, ObjectType, ID } from 'type-graphql';
import {
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';
import User from './User';

@ObjectType()
@Table({})
export class Doc extends Model {
  @Field(type => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Field()
  @Column
  name!: string;

  @Field()
  @Column
  text!: string;

  @Field()
  @Column
  @CreatedAt
  createdAt!: Date;

  @Field()
  @Column
  @UpdatedAt
  updatedAt!: Date;

  @BelongsTo(() => User, 'userId')
  user!: User;

  userId!: string;
}
