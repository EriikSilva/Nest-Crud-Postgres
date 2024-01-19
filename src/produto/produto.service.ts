import { Injectable } from '@nestjs/common';
import db from 'src/database/prisma';
import { CreateProdutoDTO } from './DTO/produto.dto';

@Injectable()
export class ProdutoService {

    async getAll(){
        return await db.produto.findMany();
    }

    async postProduto(params:CreateProdutoDTO){
        return await db.produto.create({
             data:{
                ...params
             }
        })
    }
}
