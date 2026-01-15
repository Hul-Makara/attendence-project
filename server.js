const express = require('express');
const app = express();
const port = 4000;
// convert app to json data
app.use(express.json());
// Access URL Routes
app.
// welcome MCR => Model-Controller-Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Server with Sequelize ORM!");
});

// startup server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});