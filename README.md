
# Sistema de Gerenciamento de Tarefas

Este projeto implementa uma API de lista de tarefas usando Node.js e PostgreSQL. O sistema permite operações básicas de CRUD (Create, Read, Update, Delete) em uma lista de tarefas, seguindo os princípios de uma arquitetura REST.

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto operacional em sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

O que você precisa para rodar o software:
- Node.js
- PostgreSQL
- Yarn
- Insomnia
- Docker

### 🔧 Instalação

1. Clone o repositório:
   `git clone https://github.com/joaogasoares/Sistema-de-Gerenciamento-de-Tarefas-Otto`
2. Instale Node no terminal:
   [Node.js](https://nodejs.org/en/)
3. Instale as dependências:
   `npm install -g yarn`
4. Adicione o Express:
   `yarn add express`
5. Instale o Insomnia para testar a API:
   Acesse [Insomnia](https://insomnia.rest/download) e siga as instruções de instalação para o seu sistema operacional.
6. Instale o Docker para gerenciar contêineres:
   Acesse [Docker](https://www.docker.com/products/docker-desktop) e siga as instruções de instalação para o seu sistema operacional.
7. Configure o banco de dados PostgreSQL:
   - Instale o PostgreSQL em sua máquina.
   - Crie um novo banco de dados para o projeto.
   - Abra o terminal ou um cliente SQL e conecte-se ao PostgreSQL.
   - Execute os comandos do arquivo `schema.sql` para criar as tabelas e estruturas necessárias.
8. Inicie o servidor:
   `yarn start`

### ⚙️ Executando os testes

Para testar as operações CRUD da sua API, você pode usar o Insomnia ou qualquer outro cliente de API. Aqui estão os passos básicos para cada operação:

1. **Create (Criar):**
   - Faça uma requisição POST para `http://localhost:3000/contacts` com um corpo JSON contendo as informações da tarefa.
   - Exemplo de corpo da requisição: `{"name": "Novo Usuario", "email": "email@exemplo.com", "phone": "0000-0000"}`

2. **Read (Ler):**
   - Para listar todas as tarefas, faça uma requisição GET para `http://localhost:3000/contacts`. Podendo inclusive adicionar no final `orderBy=desc` para buscar seguindo uma ordem descendente.
   - Para obter uma tarefa específica, faça uma requisição GET para `http://localhost:3000/contacts/[id-do-usuario]`.

3. **Update (Atualizar):**
   - Faça uma requisição PUT para `http://localhost:3000/contacts/[id-do-usuario]` com um corpo JSON contendo as atualizações semelhante ao do método CREATE.

4. **Delete (Excluir):**
   - Faça uma requisição DELETE para `http://localhost:3000/contacts/[id-do-usuario]`.

Lembre-se de substituir `[id-do-usuario]` pelos valores correspondentes do seu projeto.

### 🛠️ Construído com

- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript.
- [PostgreSQL](https://www.postgresql.org/) - Sistema de gerenciamento de banco de dados.
- [Docker](https://www.docker.com/) - Conjunto de produtos de plataforma.
- [Express.js](https://expressjs.com/) - Framework para aplicações web.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Extensão auxiliar na detecção e correção de erros.

### 🤔 Observações pessoais

- **Dificuldades:** Foi um projeto muito desafiador principalmente na parte de Docker e Banco de dados pois eram tecnologias novas para mim. Havia muita sintaxe nova e programas que desconhecia que acabei me atrapalhando até mesmo na instalação. Por sorte tive acesso a um curso que conseguiu me trazer um norte na questão.

- **Para o Futuro desse projeto:** Gostaria de implementar categorias e dividir os usuários entre elas, além de implementar uma interface html para que seja possível um usuário inserir seus dados ali dentro.
