import { User } from 'src/1-Domain/Users/users.entity';
import { IBaseRepository } from 'src/2-Business/shared/repositories/baseRepository';

export default class DeleteUserUseCase {
  constructor(readonly userRepository: IBaseRepository<User>) {
    this.userRepository = userRepository;
  }

  async execute(id: string): Promise<{
    status: number;
    message: string;
  }> {
    await this.userRepository.getById(id);
    await this.userRepository.delete(id);
    return {
      status: 200,
      message: 'User deleted successfully',
    };
  }
}
