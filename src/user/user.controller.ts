import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './DTOS/userDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get()
    async getAllUser(){
        return this.userService.getAllUsers();
    }

    @Post()
    async createUser(@Body() createUser:CreateUserDTO){
        return this.userService.createUser(createUser);
    }

    
}
