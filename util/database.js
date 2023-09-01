const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'hsrokz786', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;