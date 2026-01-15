const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_attendence", // DB name

  "root", // DB user
  "root", // DB password
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

// TEST connection
sequelize
  .authenticate()
  .then(() => console.log("Sequelize connected.."))
  .catch((err) => console.log("DB Error: ", err));

module.exports = sequelize;