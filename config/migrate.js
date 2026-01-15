const sequelize = require("../config/db");
const teacher = require("../models/teacherModel");
const Student = require("../models/studentModel");
const classes = require("../models/classModel");
const subject = require("../models/subjectModel");
const attendance = require("../models/attendentModel");

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync({ alter: true });
        console.log("All models were successfully.");
        process.exit(0);
    } catch (error) {
        console.error(" Migration failed to connect to the database:", error);
        process.exit(1);
    }
})();