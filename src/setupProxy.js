const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Coincide con el endpoint de tu API
    createProxyMiddleware({
      target: 'https://api-proyecto-integrador.onrender.com',
      changeOrigin: true,
    })
  );
};
