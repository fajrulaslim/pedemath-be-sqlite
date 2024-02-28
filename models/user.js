// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
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
    kelas: {
        type: DataTypes.STRING,
    },
    total_video: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
    },
    total_materi: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
    },
    total_kuis: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
    },
    total_bintang: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
    }
});

module.exports = User;