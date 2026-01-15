const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = sequelize.define("student", {
    studentid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentname_kh: DataTypes.STRING,
    studentname_en: DataTypes.STRING,
    gender: DataTypes.STRING,
}, {  
    tableName: 'students_tbl',
    timestamps: false
});

module.exports = Student;