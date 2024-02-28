const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Level = sequelize.define('Level', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nama: {
        allowNull: false,
        type: DataTypes.STRING,
    },
});

module.exports = Level;