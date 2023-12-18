import { ICreateUser, UsersFactory } from 'src/1-Domain/Users/userFactory';
import { User } from 'src/1-Domain/Users/users.entity';
import { IBaseRepository } from 'src/2-Business/shared/repositories/baseRepository';

export default class UpdateUserUseCase {
  constructor(readonly userRepository: IBaseRepository<User>) {
    this.userRepository = userRepository;
  }

  async execute(id: string, data: ICreateUser): Promise<User> {
    const oldUser = await this.userRepository.getById(id);

    const newUser = UsersFactory.update(id, {
      ...data,
      createdAt: oldUser.createdAt,
    });

    await this.userRepository.update(newUser);
    return newUser;
  }
}
