const http = require('http');
const host = "0.0.0.0"
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.url === '/hello' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint não encontrado\n');
  }
});

const port = 8000;

server.listen(port,host, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
