const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Contact = sequelize.define('Contact', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Contact;
