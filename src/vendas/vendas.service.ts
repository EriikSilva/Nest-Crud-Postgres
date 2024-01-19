import db  from 'src/database/prisma';
import { Body, Injectable } from '@nestjs/common';
import { PostVendasDTO } from './DTO/vendas.dto';

@Injectable()
export class VendasService {

    async getVendas(){
        return db.vendas.findMany();
    }
    
    async postVendas(@Body() postVendasDto:PostVendasDTO){
        return await db.vendas.create({
            data:{
                ...postVendasDto
            }
        })
    }

}
