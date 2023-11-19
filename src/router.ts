import { IncomingMessage, ServerResponse } from 'http';

const handleRoutes = (req: IncomingMessage, res: ServerResponse) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    homeRoute(req, res);
  } else if (method === 'GET' && url === '/about') {
    aboutRoute(req, res);
  } else if (method === 'POST' && url === '/submit') {
    submitRoute(req, res);
  } else {
    notFoundRoute(req, res);
  }
};

const homeRoute = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Welcome to the homepage!</h1>');
  res.end();
};

const aboutRoute = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>About Us</h1>');
  res.end();
};

const submitRoute = (req: IncomingMessage, res: ServerResponse) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    console.log('Received data:', body);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Form Submitted Successfully!</h1>');
    res.end();
  });
};

const notFoundRoute = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 Not Found');
  res.end();
};

export { handleRoutes, homeRoute, aboutRoute, submitRoute, notFoundRoute };
