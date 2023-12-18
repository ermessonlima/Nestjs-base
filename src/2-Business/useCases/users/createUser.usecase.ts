import { ICreateUser, UsersFactory } from 'src/1-Domain/Users/userFactory';
import { User } from 'src/1-Domain/Users/users.entity';
import { IRepository } from 'src/2-Business/Users/IRepository';

export default class CreateUserUseCase {
  constructor(private readonly userRepository: IRepository<User>) {}

  async execute(data: ICreateUser): Promise<User> {
    const user = await UsersFactory.create(data);
    await this.userRepository.create(user);
    return user;
  }
}
