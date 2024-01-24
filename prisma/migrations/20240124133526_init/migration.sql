-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "phone" VARCHAR NOT NULL,
    "cpf" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id_produto" UUID NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "produto_pk" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "vendas" (
    "id_venda" UUID NOT NULL,
    "id_produto" UUID NOT NULL,
    "id_user" UUID NOT NULL,

    CONSTRAINT "vendas_pk" PRIMARY KEY ("id_venda")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "produto_venda_fk" FOREIGN KEY ("id_produto") REFERENCES "produto"("id_produto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "user_venda_fk" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
