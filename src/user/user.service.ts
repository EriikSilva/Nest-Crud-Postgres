import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTOS/userDTO';
import { UserEntity } from './interface/user.entity';
import { hash } from 'bcrypt';
import db from 'src/database/prisma';

@Injectable()
export class UserService {
    
    constructor(){}


    async createUser(createUserDTO:CreateUserDTO):Promise<UserEntity>{
        const saltOrRounds = 10;

        const hashPassword = await hash(createUserDTO.password, saltOrRounds);

        return await db.user.create({
         data:{
            ...createUserDTO,
            password:hashPassword
         }
        })
    }

    async getAllUsers(){
        return await db.user.findMany();
    }
}

