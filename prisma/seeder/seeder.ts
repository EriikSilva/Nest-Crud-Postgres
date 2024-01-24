import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateProdutoDTO } from 'src/produto/DTO/produto.dto';
import { CreateUserDTO } from 'src/user/DTOS/userDTO';

const prisma = new PrismaClient();

async function seed() {
  const userData:CreateUserDTO[] = [
    { name:'john doe', email: 'john.doe@example.com',cpf:"11111111111",phone:"212121212", password: 'Abc@123' },
    { name:'jane doe', email: 'jane.doe@example.com',cpf:"22222222222",phone:"212121212", password: '123@Abc' },
  ];

  const productData:CreateProdutoDTO[] = [
    { nome: "Celular"}, 
    { nome:"Notebook"},
  ]  

  const saltRounds = 10;

  //CRIAÇÃO DE USUÁRIO
  for (const user of userData) {
    const data = {
      ...user,
      password: await bcrypt.hash(user.password, saltRounds),
    };

    console.log('Usuário Criado', data)
    await prisma.user.create({ data });
  }

   //CRIAÇÃO DE PRODUTO
  for(const product of productData){
    const data = {
        ...product
    }

    console.log('Produto Criado', data)
    await prisma.produto.create({data});
  }

  //CRIAÇÃO DE VENDAS
  const allUsers = await prisma.user.findMany()
  const userIds = allUsers.map(user => user.id);

  const allProducts = await prisma.produto.findMany()
  const productIds = allProducts.map(product => product.id_produto);

  for (const userId of userIds) {
    for (const productId of productIds) {
      const vendaData = {
        id_user: userId,
        id_produto: productId,
      };
  
      console.log('Venda Criada', vendaData);
      await prisma.vendas.create({ data: vendaData });
    }
  }
  
}

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
