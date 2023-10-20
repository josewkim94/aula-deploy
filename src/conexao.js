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
    connection: {
        user: process.env.DB_NAME,
        host: process.env.DB_SERVER,
        database: process.env.DB_NAME,
        password: process.env.DB_SECRET,
        port: 5432
    }
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