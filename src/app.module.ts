import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';
import { VendasService } from './vendas/vendas.service';
import { VendasController } from './vendas/vendas.controller';


@Module({
  imports: [UserModule],
  controllers: [AppController, ProdutoController, VendasController],
  providers: [AppService, ProdutoService, VendasService],
})
export class AppModule {}
