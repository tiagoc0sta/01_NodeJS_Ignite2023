export async function json(req, res, next) {
  const buffers = [];

  // entrada - converta corpo da requisoção para json
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  //saida - fala ao frontend que os dados serao sempre devolvidos em json
  res.setHeader('Content-type', 'application/json');
}
