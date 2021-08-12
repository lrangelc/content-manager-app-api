const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

const fs = require('fs');
const path = require('path');
const pathToFile = path.resolve('./data.json');

const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/resources', (req, res) => {
  const resources = getResources();

  console.log('From the code!');
  res.send(resources);
});

app.post('/api/resources', (req, res) => {
  // const resources = getResources();

  console.log('Data has been received to POST endpoint');
  console.log(req.body);
  res.send('Data has been received');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
  console.log(`ready - started server on 0.0.0.0:${PORT}, url: http://localhost:${PORT}`);
});
console.log('Server is running!!!');
