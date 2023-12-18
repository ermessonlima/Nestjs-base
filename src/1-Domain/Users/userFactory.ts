import { v4 } from 'uuid';
import { IUser, User } from './users.entity';

export type ICreateUser = Omit<IUser, 'createdAt' | 'updatedAt' | 'id'>;

export class UsersFactory {
  static create(user: ICreateUser): User {
    return new User({
      id: v4(),
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static update(
    id: string,
    userToUpdate: Omit<IUser, 'id' | 'updatedAt'>,
  ): User {
    return new User({
      id,
      ...userToUpdate,
      updatedAt: new Date(),
    });
  }
}
