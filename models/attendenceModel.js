const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../config/db");


const attendence = sequelize.define("attendent", {
    attendent_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attendent_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'Present'
    },
    notes: {
        type: DataTypes.TEXT
    },
    create_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'attendent_tbl',
    timestamps: true
});

module.exports = attendence;