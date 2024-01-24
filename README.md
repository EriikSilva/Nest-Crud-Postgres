
# Nest Vendas

# 💾 Instalação
- Necessario Node e NestJS
- Clonar o projeto ```git clone https://github.com/EriikSilva/Nest-Vendas.git```
- Rodar o comando pelo cmd na pasta do projeto ```npm install```
- Criar arquivo no raiz do projeto ```.env``` e configurar banco de dados de acordo como esta em ```.env.example``` 
- Rodar o Schema do banco ```npx prisma db push``` e logo após ```npm run migrate-and-seed``` para rodar a seed de usuários, produtos e vendas.
- Rodar o projeto com o comando no terminal ```npm run start:dev``` e acessar ```http://localhost:3000```

## 📰 Sobre
O projeto Nest-Vendas é uma aplicação construída usando o framework Nest.js e incorporando o Prisma como ORM para interagir com o banco de dados. O objetivo principal desta aplicação é gerenciar informações relacionadas a vendas, produtos e usuários por meio de três tabelas principais

# 📃 Tabela(s)
<img src="https://github.com/EriikSilva/Nest-Vendas/assets/61124602/faf1402c-9368-41a9-92b7-40fbb3e3f991" />

## Seeds Exemplos
### Usuários

  <table>
        <tr>
            <th>ID (gerado por UUID)</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Phone</th>
            <th>Senha (Criptografada)</th>
        </tr>
        <tr>
            <td>5ef95aa9-b62d-4eea-acf0-e9b6259f91c7</td>
            <td>john.doe@example.com</td>
            <td>11111111111</td>
            <td>212121212</td>
            <td>Abc@123</td>
        </tr>
        <tr>
            <td>6d05f8f1-7b7a-4926-a042-31db297e9ef1</td>
            <td>jane.doe@example.com</td>
            <td>22222222222</td>
            <td>212121212</td>
            <td>123@Abc</td>
        </tr>
    </table>

### Produtos

  <table>
        <tr>
            <th>id_produto</th>
            <th>Nome</th>
        </tr>
        <tr>
            <td>8da2fe03-5a18-4d5c-9b81-ba400aa615d9</td>
            <td>Celular</td>
        </tr>
        <tr>
            <td>d8279c96-d7d6-4169-9224-cb955199fd69</td>
            <td>Notebook</td>
        </tr>
    </table>

### Vendas

  <table>
        <tr>
            <th>id_venda</th>
            <th>id_produto</th>
            <th>id_user</th>
        </tr>
        <tr>
            <td>593af369-954b-42d8-98a7-062f73fb1025</td>
            <td>8da2fe03-5a18-4d5c-9b81-ba400aa615d9</td>
            <td>5ef95aa9-b62d-4eea-acf0-e9b6259f91c7</td>
        </tr>
        <tr>
            <td>b0a37fd6-0000-4195-bac5-19ce23353db4</td>
            <td>d8279c96-d7d6-4169-9224-cb955199fd69</td>
            <td>5ef95aa9-b62d-4eea-acf0-e9b6259f91c7</td>
        </tr>
       <tr>
            <td>6d8dc6b3-a33e-4f80-a4ba-e5a13e44cb73</td>
            <td>8da2fe03-5a18-4d5c-9b81-ba400aa615d9</td>
            <td>6d05f8f1-7b7a-4926-a042-31db297e9ef1</td>
        </tr>
      <tr>
            <td>3c299c61-a68f-4a20-8a88-6147f135fa8e</td>
            <td>d8279c96-d7d6-4169-9224-cb955199fd69</td>
            <td>6d05f8f1-7b7a-4926-a042-31db297e9ef1</td>
        </tr>
    </table>
    

## 🐱‍👤 ROTAS
# Usuário

- POST => /user
`
{
    "name":"erik",
    "email":"erik1@teste.com",
    "phone":"999999",
    "cpf":"0202020202",
    "password":"alsidj"
}
`
- GET => /user
`
 {
        "id": "5ef95aa9-b62d-4eea-acf0-e9b6259f91c7",
        "name": "john doe",
        "email": "john.doe@example.com",
        "phone": "212121212",
        "cpf": "11111111111",
        "password": "$2b$10$TBkCeADi4xFs/bY5w57Le.s6S7OCYZggL0QqIqJHz1336X.9J0QG."
    },
`
- DELETE => /user/:id
`
{  "message": "Usuário deletado com sucesso!"}
`
# Produto
- GET => /produto
`
    {
        "id_produto": "8da2fe03-5a18-4d5c-9b81-ba400aa615d9",
        "nome": "Celular"
    }
`
- POST => /produto
`
{
   "nome": "Celular"
}
`  
# Vendas
- GET => /vendas
`
    {
        "id_venda": "593af369-954b-42d8-98a7-062f73fb1025",
        "id_produto": "8da2fe03-5a18-4d5c-9b81-ba400aa615d9",
        "id_user": "5ef95aa9-b62d-4eea-acf0-e9b6259f91c7"
    },
`
- POST => /vendas
`
{
    "id_produto": "63035908-81c2-424b-8eae-0115835c889f",
    "id_user": "e03fac17-8c66-4cfb-b0a6-3ec094ec2559"
}
`
