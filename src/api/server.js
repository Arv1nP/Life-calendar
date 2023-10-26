const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Use db.json directly
const middlewares = jsonServer.defaults();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Define custom routes (if needed)
server.get('/customRoute', (req, res) => {
  res.json({ customData: 'Hello from custom route!' });
});

// Modify the POST endpoint to handle ID generation manually
server.post('/api/ratings', (req, res) => {
  const userInfo = req.body;
  const id = db.get('ratings').size() + 1; // Manually generate ID
  userInfo.id = id;
  db.get('ratings').push(userInfo).write();
  res.json(userInfo);
});

// Use db.json directly as the router
server.use('/api', router);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});