const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Node.js + Docker!</h1>
    <p>Environment: ${process.env.APP_ENV || 'development'}</p>
    <p>DB Host: ${process.env.DB_HOST || 'not set'}</p>
    <p>Current time: ${new Date().toLocaleString()}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});