import { User } from 'src/1-Domain/Users/users.entity';
import { IBaseRepository } from 'src/2-Business/shared/repositories/baseRepository';

export default class GetAllUsersUseCase {
  constructor(readonly userRepository: IBaseRepository<User>) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    const user = await this.userRepository.getAll();
    return user;
  }
}
