# TelaViva

Você foi contratado por uma startup de cinema digital chamado TelaViva, eles precisam de uma base de livros no sistema, com isso em mente, faça uma API CRUD para cadastro de filmes, ele será utilizado para listar os filmes aos usuários para eles poderem escolher quais filmes desejam assistir. Não é necessário sistema de acesso (login e registro) de usuários, pode deixar as rotas da API abertas sem autenticação/autorização

Critérios de aceite:
- Deve ser possível cadastrar, editar, deletar e visualizar filmes
- Deve ser possível filtrar livros pelos nomes e autores nos endpoints de leitura
- Deve utilizar um banco de dados (Relacional ou não-relacional, a sua escolha)
- Não deve permitir a criação de filmes duplicados no banco de dados

---

## Etapas do Projeto TelaViva

1. Configuração do Ambiente

- [ ] Criar projeto com Fastify e TypeScript

- [ ] Criar server.ts com rotas básicas

- [ ] Configurar tsconfig.json, package.json e scripts de desenvolvimento

- [ ] Instalar e configurar o postgres.js para conectar ao banco

- [ ] Subir uma instância local do Postgres (pode usar Docker se quiser)

- [ ] Criar banco de dados telaviva no Postgres

2. Modelagem e Banco de Dados

- [ ] Definir a estrutura da tabela films

 - id (UUID)

 - name (string, único)

 - author (string)

 - description (string opcional)

 - release_date (date opcional)

- [ ] Criar migration (ou criar manualmente) a tabela no Postgres

- [ ] Testar conexão entre Fastify ↔ Postgres.js ↔ Banco

3. Implementação dos Endpoints

### POST /film

 - [ ] Receber dados do filme

 - [ ] Validar se o filme já existe pelo nome

 - [ ] Inserir no banco

### GET /film

 - [ ] Listar todos os filmes

 - [ ] Implementar filtro por name e author usando query params

### PUT /film/:name

 - [ ] Buscar filme pelo name

 - [ ] Atualizar campos enviados no body

DELETE /film/:name

 - [ ] Deletar filme pelo name

4. Validações

 - [ ] Não permitir filmes duplicados (mesmo name)

 - [ ] Retornar mensagens claras de erro e sucesso

5. Testes

 - [ ] Usar o Postman para testar todos os endpoints

        Testar criação de filme

        Testar edição

        Testar deleção

        Testar filtros

        Testar erro de filme duplicado
