import { ConflictException, Injectable } from '@nestjs/common';
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
    return await db.user.create({
      data: {
        ...createUserDTO,
        password: hashPassword,
      },
    });
  }

  async getAllUsers() {
    return await db.user.findMany();
  }
}
