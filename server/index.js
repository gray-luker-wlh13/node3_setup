require('dotenv').config();
const express = require('express'),
      controller = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server is running on ${port}`))