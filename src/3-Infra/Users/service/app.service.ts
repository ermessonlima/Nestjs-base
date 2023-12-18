import { Injectable } from '@nestjs/common';
import CreateUserUseCase from '../../../2-Business/useCases/users/createUser.usecase';
import { User } from '../../../1-Domain/Users/users.entity';
import { ICreateUser } from '../../../1-Domain/Users/userFactory';

@Injectable()
export class UserService {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async createUser(createUserDto: ICreateUser): Promise<User> {
    return this.createUserUseCase.execute(createUserDto);
  }
}
