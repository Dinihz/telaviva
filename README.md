# TelaViva

Uma API para cadastro, edição, listagem e exclusão de filmes, feita com Fastify e PostgreSQL. Ideal para estudos e testes com banco de dados relacional e requisições REST.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Postgres.js](https://github.com/porsager/postgres)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)

---

## 📦 Instalação

### 1. Clone o projeto

```bash
git clone https://github.com/Dinihz/telaviva.git
cd telaviva
```

### 2. Instale as dependências

```bash
npm install
```

---

## Banco de Dados com Docker

Certifique-se de ter o Docker instalado.

### 1. Suba o container do PostgreSQL:

```bash
docker run --name postgres-films \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=filmsdb \
  -p 5432:5432 \
  -d postgres
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=filmsdb
```

- ⚠️ Estas credenciais são usadas apenas para fins de desenvolvimento local. Não use em produção.

---

## Rodando o Projeto

```bash
npm run dev
```

Se tudo estiver certo, você verá:

```
HTTP server running.
Table 'films' verified/created successfully!
```

---

## Rotas da API

### Criar filme

- **POST** `/film`
```json
{
  "name": "Film",
  "author": "Christopher",
  "description": "thriller",
  "release_date": "2020-07-16"
}
```

---

### Listar filmes

- **GET** `/film`
- **GET** `/film?search=Film`

---

### Editar filme

- **PUT** `/film/:name`
```json
{
  "author": "New Author",
  "description": "Updated description"
}
```

---

### Deletar filme

- **DELETE** `/film/:name`

---

## Testando com Postman

Lembre-se de definir o **Content-Type: application/json** e enviar o corpo da requisição em **raw JSON**.

---

## Observações

- Datas são retornadas no formato ISO (ex: `2024-05-03T00:00:00.000Z`)
- O projeto não utiliza ORM, apenas SQL puro com a biblioteca `postgres`.

---

## 👨‍💻 Autor

Feito por Lucas – [@Dinihz](https://github.com/Dinihz)
