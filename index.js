const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/hello' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint não encontrado\n');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
