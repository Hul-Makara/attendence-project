const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");
const classes =  sequelize.define("class", {
    classid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    classname: DataTypes.STRING,
},{
    tableName: 'classes_tbl',
    timestamps: false
});

module.exports = classes ;