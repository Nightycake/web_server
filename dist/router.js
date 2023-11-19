"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRoute = exports.submitRoute = exports.aboutRoute = exports.homeRoute = exports.handleRoutes = void 0;
const handleRoutes = (req, res) => {
    const { method, url } = req;
    if (method === 'GET' && url === '/') {
        homeRoute(req, res);
    }
    else if (method === 'GET' && url === '/about') {
        aboutRoute(req, res);
    }
    else if (method === 'POST' && url === '/submit') {
        submitRoute(req, res);
    }
    else {
        notFoundRoute(req, res);
    }
};
exports.handleRoutes = handleRoutes;
const homeRoute = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to the homepage!</h1>');
    res.end();
};
exports.homeRoute = homeRoute;
const aboutRoute = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Us</h1>');
    res.end();
};
exports.aboutRoute = aboutRoute;
const submitRoute = (req, res) => {
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
exports.submitRoute = submitRoute;
const notFoundRoute = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
};
exports.notFoundRoute = notFoundRoute;
