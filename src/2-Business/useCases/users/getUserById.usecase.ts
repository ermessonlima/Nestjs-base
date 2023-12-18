import { User } from 'src/1-Domain/Users/users.entity';
import { IBaseRepository } from 'src/2-Business/shared/repositories/baseRepository';

export default class GetUserByIdUseCase {
  constructor(readonly userRepository: IBaseRepository<User>) {
    this.userRepository = userRepository;
  }

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.getById(id);
    return user;
  }
}
