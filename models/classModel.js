const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const classes = sequelize.define("class", {
    class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNullL: true
    },
    class_code: {
        type: DataTypes.STRING(20),
        unique: true
    },
    class_year: {
        type: DataTypes.STRING(50)
    },
    schedule: {
        type: DataTypes.STRING(100)
    },
    room_number: {
        type: DataTypes.STRING(20)
    },
    create_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'classes_tbl',
    timestamps: false
});

module.exports = classes;