const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/resources', (req, res) => {
  console.log('From the code!');
  res.send('Hello Resources');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
  console.log(`ready - started server on 0.0.0.0:${PORT}, url: http://localhost:${PORT}`);
});
console.log('Server is running!!!');
