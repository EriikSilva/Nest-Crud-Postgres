import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDTO } from './DTO/produto.dto';

@Controller('produto')
export class ProdutoController {

    constructor(private produtoService:ProdutoService){}

    @Get()
    async getAll(){
        return await this.produtoService.getAll();
    }

    @Post()
    async postProduto(@Body() createProdutoDTO:CreateProdutoDTO){
        return await this.produtoService.postProduto(createProdutoDTO);
    }
}
