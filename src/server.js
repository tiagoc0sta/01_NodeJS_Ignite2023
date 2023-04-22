import http from 'node:http';

//criar um user

//Requisição HTTP é composta de dois principais recursos:
//- método HTTP (mais usados GET, POST, PUT, PATCH, DELETE)
//- URL

// GET -> Buscar um recurso no Backend
// POST-> Criar um recurso no Backend
// PUT-> Atualizar um recurso no baBackend (atualizar muitos campos ao mesmo tempo)
// PATCH-> Atualizar um recurso específico no Backend (atualizar muitos campos ao mesmo tempo)
// DELETE => Deletar um recurso no backend

//Exemplo de rota final (conjunto de metodo HTTP + URL):
//- GET /users => buscando usuários do backend
//- POST /users => criando usuários do backend

// Statefull - sempre vai ter informação guardada em memória
// Stateless - não salva nada em memória - salva em outro lugar ex: banco de dados, arquivo de texto

//JSON - Javascript Object notation - estrutura de dados para utilizado entre frontend e backend ou entre dois backends

// Cabeçalhos (Requisição/ resposta) = são Metadados

/*HTTP Status code
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)*/

// STREAMS
// Readable streams = enviar dados, fornecer informações
// Writeble streams

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  //console.log(body.name);

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
  }
  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
