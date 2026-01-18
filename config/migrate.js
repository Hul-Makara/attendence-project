const sequelize = require("../config/db");
const teacher = require("../models/teacherModel");
const student = require("../models/studentModel");
const classes = require("../models/classModel");
const subject = require("../models/subjectModel")
const attendance = require("../models/attendentModel");

// Define relationships base on foreign keys

// Attendance belongs to Student
attendance.belongsTo(student, { foreignKey: 'student_id' });
student.hasMany(attendance, { foreignKey: 'student_id' });

// Attendance belongs to Teacher
attendance.belongsTo(teacher, { foreignKey: 'teacher_id' });
teacher.hasMany(attendance, { foreignKey: 'teacher_id' });

// Attendance belongs to Subject
attendance.belongsTo(subject, { foreignKey: 'subject_id' });
subject.hasMany(attendance, { foreignKey: 'subject_id' });

// Student belongs to Class
student.belongsTo(classes, { foreignKey: 'class_id' });
classes.hasMany(student, { foreignKey: 'class_id' });

// Class belongs to Subject
classes.belongsTo(subject, { foreignKey: 'subject_id' });
subject.hasMany(classes, { foreignKey: 'subject_id' });

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