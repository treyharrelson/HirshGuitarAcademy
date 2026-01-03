require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    // make sure tables exist
    sequelize.sync({ alter: true }).then(() => {
        console.log('Tables synced successfully.');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;