# Coteminas - AMMO Varejo Challenge

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org)

## 💻 Projeto

Aplicação de produtos de e-commerce

## 🚀 Como executar

- Clone o repositório
- Faça uma cópia do arquivo `ormconfig.example.json` para `ormconfig.json` e preencha com as informações do banco de dados
- Se tiver docker instalado, rode `docker-compose up -d` para subir o serviço do banco de dados, caso contrário, crie um banco postgre com o nome `coteminas` e configure o arquivo `ormconfig.json`.
- Rode `yarn` para baixar as dependências
- Rode `yarn seed:run` para rodar as seeds do banco de dados
- Rode o `yarn dev` para iniciar a aplicação.

Após isso, a aplicação estará disponível em `http://localhost:3333`

## 🖥 Link da API hospedada na AWS EC2
https://ammo.yandsb.dev/
