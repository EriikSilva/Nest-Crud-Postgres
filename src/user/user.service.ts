import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './DTOS/userDTO';

import { hash } from 'bcrypt';
import db from 'src/database/prisma';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(createUserDTO: CreateUserDTO) {
    const { email } = createUserDTO;
    const saltOrRounds = 10;
    const hashPassword = await hash(createUserDTO.password, saltOrRounds);

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('E-mail já registrado');
    }
    const createdUser = await db.user.create({
      data: {
        ...createUserDTO,
        password: hashPassword,
      }
    });

    return { message: 'Usuário criado com sucesso' };
  }

  async deleteUser(id:string){
    const user = await db.user.findUnique({
      where:{id:id}
    })

    if(!user){
      throw new NotFoundException('Usuário não encontrado');
    }

    const deleteUser = await db.user.delete({
      where:{
        id:id
      }
    })

    return {message:"Usuário deletado com sucesso!"}
  }

  async getAllUsers() {
    return await db.user.findMany();
  }
}
