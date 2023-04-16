import http from 'node:http';

//criar um user

//Requisição HTTP é composta de dois principais recursos:
//- método HTTP (mais usados GET, POST, PUT, PATCH, DELETE)
//- URL

// GET -> Buscar um recurso no Backend
// POST-> Criar um recurso no Backend
// PUT-> Atualizar um recurso no baBackend (atualizar muitos campos ao mesmo tempo)
// PATCH-> Atualizar um recurso específico no baBackend (atualizar muitos campos ao mesmo tempo)
// DELETE => Deletar um recurso no backend

//Exemplo de rota final (conjunto de metodo HTTP + URL):
//- GET /users => buscando usuários do backend
//- POST /users => criando usuários do backend

// Statefull - sempre vai ter informação guardada em memória
// Stateless - não salva nada em memória - salva em outro lugar ex: banco de dados, arquivo de texto

//JSON - Javascript Object notation - estrutura de dados para utilizado entre frontend e backend ou entre dois backends

// Cabeçalhos (Requisição/ resposta) = são Metadados

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
  }
  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    });

    return res.end('Criação de usuários');
  }

  return res.end('Hello World');
});

server.listen(3333);
