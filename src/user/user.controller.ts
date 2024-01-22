import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './DTOS/userDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDTO) {
    try {
      return await this.userService.createUser(createUser);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    try {
      return await this.userService.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }

}
