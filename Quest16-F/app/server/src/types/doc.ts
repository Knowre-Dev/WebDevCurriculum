import { Field, InputType } from 'type-graphql';
import { Doc } from '../models/Doc';

@InputType()
export class UpdateDocInput implements Pick<Doc, 'id' | 'name' | 'text'> {
  @Field({ nullable: false })
  id!: string;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  text!: string;
}
