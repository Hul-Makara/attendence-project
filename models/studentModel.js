const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Student = sequelize.define("student", {
    student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    attendence_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    class_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    studentname_kh:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    studentname_en: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(10),
    },
    create_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {  
    tableName: 'students_tbl',
    timestamps: false
});

module.exports = Student;