require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/api/routes');
const client = require('./src/config/database');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);
app.use(errorHandler);

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS schools (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL
      )
    `;

    await client.query(createTableQuery);
    console.log('Schools table created or already exists');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();
