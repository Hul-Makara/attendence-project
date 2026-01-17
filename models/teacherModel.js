const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Teacher = sequelize.define("Teacher", {
    teacher_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    teachername_kh: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    teachername_en: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        unique:true
    },
    create_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {  
    tableName: 'teachers_tbl',
    timestamps: false
});

module.exports = Teacher;