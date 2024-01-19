import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './DTOS/userDTO';
import { UserService } from './user.service';
import { UserEntity } from './interface/user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get()
    async getAllUser():Promise<UserEntity[]>{
        return this.userService.getAllUsers();
    }

    @Post()
    async createUser(@Body() createUser:CreateUserDTO){
        return this.userService.createUser(createUser);
    }

    
}
