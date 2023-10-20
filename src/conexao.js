// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         user: 'postgres',
//         host: 'localhost',
//         database: 'market_cubos',
//         password: 'root',
//         port: 5432
//     }
// });
require("dotenv").config();
console.log(process.env.DB_URL);
const knex = require('knex')({
    client: 'pg',
    connection: process.env.DB_URL
});

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'market_cubos',
//     password: 'root',
//     port: 5432
// });

// const query = (text, param) => {
//     return pool.query(text, param);
// }

module.exports = knex;