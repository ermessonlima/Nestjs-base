import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ICreateUser } from 'src/1-Domain/Users/userFactory';
import { UserService } from 'src/3-Infra/Users/service/app.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/createUser')
  async createUser(@Body() createUserDto: ICreateUser, @Res() res) {
    try {
      const user = await this.userService.createUser(createUserDto);
      return res.status(HttpStatus.CREATED).json(user);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get('/test')
  test(@Res() res): string {
    return res.json({ message: 'Hello World!' });
  }
}
