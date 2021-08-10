import { AuthenticationError, UserInputError } from 'apollo-server-express';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Doc } from '../models/Doc';
import DocService from '../service/doc.service';
import { Context } from '../types';
import { UpdateDocInput } from '../types/doc';

@Resolver()
export class DocResolver {
  @Query(() => [Doc])
  async docs(@Ctx() { user }: Context): Promise<Doc[]> {
    if (!user) {
      throw new AuthenticationError('Invalid user');
    }
    return await DocService.getDocsByUserId(user.id);
  }

  @Mutation(() => Doc)
  async createDoc(
    @Ctx() { user }: Context,
    @Arg('name') name: string
  ): Promise<Doc> {
    if (!user) {
      throw new AuthenticationError('Invalid user');
    }

    if (await DocService.hasDoc(name)) {
      throw new UserInputError('Existed');
    }

    return await Doc.create({
      name: name,
      text: '',
      userId: user.id,
    });
  }

  @Mutation(() => Doc)
  async updateDoc(
    @Ctx() { user }: Context,
    @Arg('doc') doc: UpdateDocInput
  ): Promise<Doc> {
    if (!user) {
      throw new AuthenticationError('Invalid user');
    }

    return await DocService.updateDoc(doc);
  }

  @Mutation(() => [Doc])
  async deleteDoc(
    @Ctx() { user }: Context,
    @Arg('id') docId: string
  ): Promise<Doc[]> {
    if (!user) {
      throw new AuthenticationError('Invalid user');
    }
    await DocService.deleteDocById(docId);

    return await DocService.getDocsByUserId(user.id);
  }
}
