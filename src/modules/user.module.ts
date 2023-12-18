import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/1-Domain/Users/users.entity';
import { IRepository } from 'src/2-Business/Users/IRepository';
import CreateUserUseCase from 'src/2-Business/useCases/users/createUser.usecase';
import { UserController } from 'src/3-Infra/Users/controller/userController';
import { USERS } from 'src/3-Infra/Users/models/UserModel.entity';
import userRepository from 'src/3-Infra/Users/repositories/UserRepository';
import { UserService } from 'src/3-Infra/Users/service/app.service';
import TYPES from 'src/constants/types';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([USERS])],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: CreateUserUseCase,
      useFactory: (repository: IRepository<User>) => {
        return new CreateUserUseCase(repository);
      },
      inject: [TYPES.UsersRepository],
    },
    {
      provide: TYPES.UsersRepository,
      useFactory: (dataSource: DataSource) => {
        return new userRepository(dataSource.getRepository(USERS));
      },
      inject: [DataSource],
    },
  ],
  exports: [UserService],
})
export class UserModule {}
