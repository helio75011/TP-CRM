const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('yourdatabasename', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
