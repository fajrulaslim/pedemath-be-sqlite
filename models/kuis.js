const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Kuis = sequelize.define('Kuis', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nama: {
        type: DataTypes.STRING,
    },
    level_id: {
        type: DataTypes.INTEGER,
    },
    soal_atas: {
        type: DataTypes.INTEGER,
    },
    operasi: {
        defaultValue: "+",
        type: DataTypes.STRING,
    },
    soal_bawah: {
        type: DataTypes.INTEGER,
    },
    jawaban: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Kuis;