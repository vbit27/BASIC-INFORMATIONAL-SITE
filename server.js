const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = './pages/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/contact.html':
      path += 'contact.html';
      break;
    case '/about.html':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen('8080', 'localhost', () => {
  console.log('listening');
});
