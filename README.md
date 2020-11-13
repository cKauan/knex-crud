<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">Postgres CRUD</h3>
  <p align="center">CRUD com knex.js</p>
<p align="center">
  
<!-- TABLE OF CONTENTS -->
## :paperclip: Sumário

* [Sobre o projeto](#sobre-o-projeto)
* [Tecnologias](#tecnologias-usadas)
* [Iniciando](#iniciando)
* [Documentação](#documentação)
* [Contribuições](#contribuições)
* [Licença](#licença)
* [Contato](#contato)

 
## Sobre o repositório

💡 Prática de operações básicas em um banco de dados com typescript

### Tecnologias Usadas
:pushpin: Essas foram as tecnologias mais utilizadas
* [Typescript](https://www.typescriptlang.org)
* [Postgres](https://www.postgresql.org)
* [KnexJS](http://knexjs.org/)


<!-- GETTING STARTED -->
## Iniciando

### Pré-requisitos

- É necessário que o <a href="https://nodejs.org/en/">NodeJS</a> esteja instalado em sua máquina
- Você também irá precisar de um gerenciador de pacotes, nesse caso usei o <a href="https://yarnpkg.com">Yarn</a>
- Foi usado <a href="https://www.postgresql.org">Postgres</a> nesse projeto, vá ao arquivo ```knexfile.ts``` e configure sua conexão.

### Instalação

```bash
# Clone o repositório
git clone https://github.com/cKauan/knex-crud.git

# Instale todos os pacotes

# Yarn
yarn install
# Npm
npm install


# Rode as migrations

# Yarn
yarn knex migrate:latest
# Npm
npx knex migrate:latest

# Ambiente de desenvolvimento

# Yarn
yarn dev
# Npm
npm run dev

# Ambiente de Produção

# Yarn
yarn build
# Npm
npm run build

# Iniciar em produção

# Yarn
yarn start
# Npm
npm run start
```


<!-- USAGE EXAMPLES -->
## Documentação

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=KnexJS%20CRUD&uri=https%3A%2F%2Fraw.githubusercontent.com%2FcKauan%2Fknex-crud%2Fmain%2Finsomnia-workspace.json)

```js

// Listar usuários
GET - /users

// Resposta - Todos os usuários
{
  date: [
    {
      id: number,
      name: string,
      surname: string,
      email: string,
      cpf: string,
      birthday: string,
      phone: string,
      active: boolean
    },
  ],
  limit: number,
  total: number
}

/* Exemplo
* "data": [
*     {
*       "id": 1,
*       "name": "Carlos Kauãn",
*       "surname": "Moreira de Sousa",
*       "email": "carloskauanmoreiradesousa@gmail.com",
*       "cpf": "12345678930",
*       "birthday": "2004-11-10T03:00:00.000Z",
*       "phone": "5585992476020",
*       "active": true
*     },
*   ],
*   "limit": 10,
*   "total": 25
*
*/

// Criar usuário
POST - /users
Content-Type: application/json

name: string - required,
surname: string - required,
email: string - required,
cpf: string - required - mask: xxxxxxxxxxx,
birthday: string - required - mask: yyyy/mm/dd,
phone: string - required,
active: boolean - required

/* Resposta - Usuário criado
*     {
*       "id": 1,
*       "name": "Carlos Kauãn",
*       "surname": "Moreira de Sousa",
*       "email": "carloskauanmoreiradesousa@gmail.com",
*       "cpf": "12345678930",
*       "birthday": "2004-11-10T03:00:00.000Z",
*       "phone": "5585992476020",
*       "active": true
*     }
*/

// Atualizar usuário (completo)
PUT - /users/:id
Content-Type: application/json

{
  "name": "José da Silva",
  "surname": "Silva Souza",
  "email": "jose@gmail.com",
  "cpf": "9999999922",
  "birthday": "2004/11/10",
  "phone": "5585992476020",
  "active": false
}

/* Resposta - Usuário Atualizado
*     {
*       "name": "José da Silva",
        "surname": "Silva Souza",
        "email": "jose@gmail.com",
        "cpf": "9999999922",
        "birthday": "2004/11/10",
        "phone": "5585992476020",
        "active": false
*     }
*/

// Atualizar usuário (Fragmentado)
PATCH - /users/:id
Content-Type: application/json

{
  "name": "José da Silva"
}

/* Resposta - Usuário Atualizado
*     {
*       "id": 1,
*       "name": "José da Silva",
*       "surname": "Moreira de Sousa",
*       "email": "carloskauanmoreiradesousa@gmail.com",
*       "cpf": "12345678930",
*       "birthday": "2004-11-10T03:00:00.000Z",
*       "phone": "5585992476020",
*       "active": true
*     }
*/

// Deletar um usuário
DELETE - users/:id

// Resposta
{
  "message": "Deleted"
}

```
<!-- CONTRIBUTING -->
## Contribuições

:dart: Você quer contribuir para o projeto e não sabe como?

1. Dê Fork no projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Comite as alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça o push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

<!-- LICENSE -->
## Licença

<a href="https://choosealicense.com/licenses/mit/">MIT</a>

<!-- CONTACT -->
## Contato

:boy: Carlos Kauãn - [https://twitter.com/carlaodamassaa](https://twitter.com/carlaodamassaa) - carloskauanmoreiradesousa@gmail.com

<p align="center">Feito com 💚 por Carlos Kauãn</p>
