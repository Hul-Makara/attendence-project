const express = require('express');
const app = express();
const port = 4000;

// convert app to json data
app.use(express.json());

// Access URL Routes
app.use("/api/v1/teacher", require("./routes/teacher.route"));
app.use("/api/v1/student", require("./routes/student.route"));
app.use("/api/v1/class", require("./routes/class.route"));
app.use("/api/v1/subject", require("./routes/subject.route"));
// app.use("/api/v1/attendance", require("./routes/attendence.route"));




// welcome MCR => Model-Controller-Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Server with Sequelize ORM!");
});

// startup server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log ('Teacher Routes: http://localhost:4000/api/v1/teacher/getall');
  console.log ('Student Routes: http://localhost:4000/api/v1/student/getall');
});