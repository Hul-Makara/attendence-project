const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");
const subject = sequelize.define("subject", {
    subjectid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subjectname: DataTypes.STRING,
},{
    tableName: 'subjects_tbl',
    timestamps: false
});

module.exports = subject;