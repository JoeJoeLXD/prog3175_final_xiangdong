// src/app.js
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json()); 

app.use('/movies', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
