import http from 'node:http';

//criar um user

//Requisição HTTP é composta de dois principais recursos:
//- método HTTP (mais usados GET, POST, PUT, PATCH, DELETE)
//- URL

// GET -> Buscar um recurso no Backend
// POST-> Criar um recurso no baBackend
// PUT-> Atualizar um recurso no baBackend (atualizar muitos campos ao mesmo tempo)
// PATCH-> Atualizar um recurso específico no baBackend (atualizar muitos campos ao mesmo tempo)
// DELETE => Deletar um recurso no backend

//Exemplo de rota final (conjunto de metodo HTTP+ URL):
//- GET /users => buscando usuários do backend
//- POST /users => criando usuários do backend

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários');
  }
  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuários');
  }

  return res.end('Hello World');
});

server.listen(3333);
