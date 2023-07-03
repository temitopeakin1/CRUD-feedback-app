const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:5000', // Replace with your JSON server URL
  changeOrigin: true,
});

module.exports = (req, res) => {
  proxy.web(req, res);
};