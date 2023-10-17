const jsonServer = require('json-server');
const server = jsonServer.create();
const data = require('./db.json');  // Correct import of db.json
const lifeQuotes = data.lifeQuotes;
const userInfo = data.userInfo;

const router = jsonServer.router({
  lifeQuotes,
  userInfo
});
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Define custom routes (if needed)
server.get('/customRoute', (req, res) => {
  res.json({ customData: 'Hello from custom route!' });
});

server.use('/api', router); // Base URL for API endpoints

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});