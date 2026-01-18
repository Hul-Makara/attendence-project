
const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");
const subject = sequelize.define("subject", {
    subject_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subject_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    subject_code:{
        type: DataTypes.STRING(20),
        unique: true
    },
    description:{
        type: DataTypes.TEXT
    },
    create_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},{
    tableName: 'subjects_tbl',
    timestamps: false
});

module.exports = subject; // This exports as 'subject'
