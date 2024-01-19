import { Body, Controller, Get, Post } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { PostVendasDTO } from './DTO/vendas.dto';

@Controller('vendas')
export class VendasController {

    constructor(private vendasService:VendasService){}

    @Get()
    async getVendas(){
        return await this.vendasService.getVendas();
    }


    @Post()
    async postVendas(@Body() postVendasDTO:PostVendasDTO){
        return await this.vendasService.postVendas(postVendasDTO)
    }

}
