const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const attendent = sequelize.define("attendent", {
    attendentid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentid: DataTypes.INTEGER,
    classid: DataTypes.INTEGER,
    subjectid: DataTypes.INTEGER,
    teacherid: DataTypes.INTEGER,
    attendent_date: Sequelize.DATE,
    attendent_status: DataTypes.STRING

}, {
    tableName: 'attendent_tbl',
    timestamps: true
});

module.exports = attendent;