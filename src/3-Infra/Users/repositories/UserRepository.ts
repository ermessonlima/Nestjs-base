import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/repositories/BaseRepository';
import { User } from 'src/1-Domain/Users/users.entity';
import { IRepository } from 'src/2-Business/Users/IRepository';

@Injectable()
export default class userRepository
  extends BaseRepository
  implements IRepository<User>
{
  constructor(private readonly repository: Repository<User>) {
    super();
  }

  async create(user: User): Promise<void> {
    await this.repository.save(user);
  }
}
