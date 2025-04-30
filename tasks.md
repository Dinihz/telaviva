## Etapas do Projeto TelaViva

1. Configuração do Ambiente

- [ x ] Criar projeto com Fastify e TypeScript

- [ x ] Criar server.ts com rotas básicas

- [ x ] Configurar tsconfig.json, package.json e scripts de desenvolvimento

- [ x ] Instalar e configurar o postgres.js para conectar ao banco

- [ x ] Subir uma instância local do Postgres com Docker

- [ x ] Criar banco de dados telaviva no Postgres

2. Modelagem e Banco de Dados

- [ x ] Definir a estrutura da tabela films

 - id (UUID)

 - name (string, único)

 - author (string)

 - description (string opcional)

 - release_date (date opcional)

- [ x ] Criar migration (ou criar manualmente) a tabela no Postgres

- [ x ] Testar conexão entre Fastify ↔ Postgres.js ↔ Banco

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

