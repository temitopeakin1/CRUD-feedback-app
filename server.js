// const httpProxy = require('http-proxy');

// const proxy = httpProxy.createProxyServer({
//   target: 'http://localhost:5000', // Replace with your JSON server URL
//   changeOrigin: true,
// });

// module.exports = (req, res) => {
//   proxy.web(req, res);
// };


// JSON Server module
// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");

// // Make sure to use the default middleware
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// // Add this before server.use(router)
// server.use(
//  // Add custom route here if needed
//  jsonServer.rewriter({
//   "/api/*": "/$1",
//  })
// );
// server.use(router);
// // Listen to port
// server.listen(3000, () => {
//  console.log("JSON Server is running");
// });

// // Export the Server API
// module.exports = server;


const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router); // Mount the JSON server under the /api path

module.exports = server;

