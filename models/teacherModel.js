const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const teacher = sequelize.define("teacher", {
    teacherid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    teachername_kh: DataTypes.STRING,
    teachername_en: DataTypes.STRING,
    phone: DataTypes.STRING,
}, {  
    tableName: 'teachers_tbl',
    timestamps: false
});

module.exports = teacher;